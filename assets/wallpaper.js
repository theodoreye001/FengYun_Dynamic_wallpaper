/**
 * Shared wallpaper utilities for FengYun satellite imagery pages.
 */

/**
 * Generate a cache-busting query parameter aligned to 15-minute satellite intervals.
 * @param {string} url - Base image URL
 * @returns {string} URL with cache-busting parameter
 */
function cacheBust(url) {
  var bucket = Math.floor(Date.now() / (15 * 60 * 1000));
  return url + '?t=' + bucket;
}

/**
 * Preload an image and return a Promise that resolves with the loaded Image element.
 * @param {string} url - Image URL to preload
 * @returns {Promise<HTMLImageElement>}
 */
function preloadImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () { resolve(img); };
    img.onerror = function () { reject(new Error('Failed to load: ' + url)); };
    img.src = url;
  });
}

/**
 * Refresh an element's background image with preloading and error fallback.
 * Keeps the last successful image on failure and shows a retry message.
 * Retries with exponential backoff up to maxRetries attempts.
 * @param {HTMLElement} element - The DOM element to update
 * @param {string} url - The image URL (will be cache-busted)
 * @param {object} [options] - Optional settings
 * @param {number} [options.retryDelay] - Initial retry delay in ms (default 60000)
 * @param {boolean} [options.skipCacheBust] - If true, skip adding cache-bust param
 * @param {number} [options.maxRetries] - Max retry attempts (default 5)
 * @param {number} [options._retryCount] - Internal: current retry count
 */
function refreshImage(element, url, options) {
  var opts = options || {};
  var retryDelay = opts.retryDelay || 60000;
  var maxRetries = opts.maxRetries !== undefined ? opts.maxRetries : 5;
  var retryCount = opts._retryCount || 0;
  var finalUrl = opts.skipCacheBust ? url : cacheBust(url);

  preloadImage(finalUrl).then(function (img) {
    element.style.backgroundImage = 'url(' + img.src + ')';
    hideError(element);
  }).catch(function () {
    if (retryCount >= maxRetries) {
      showError(element, 'Image unavailable');
      return;
    }
    showError(element, 'Retrying...');
    var nextDelay = retryDelay * Math.pow(1.5, retryCount);
    setTimeout(function () {
      refreshImage(element, url, {
        retryDelay: retryDelay,
        skipCacheBust: opts.skipCacheBust,
        maxRetries: maxRetries,
        _retryCount: retryCount + 1
      });
    }, nextDelay);
  });
}

/**
 * Start auto-refreshing an element's background image at a regular interval.
 * @param {HTMLElement} element - The DOM element to update
 * @param {string} url - The base image URL
 * @param {number} [intervalMs] - Refresh interval in ms (default 1800000 = 30 min)
 * @returns {number} The interval ID
 */
function startAutoRefresh(element, url, intervalMs) {
  var interval = intervalMs || 1800000;
  refreshImage(element, url);
  return setInterval(function () {
    refreshImage(element, url);
  }, interval);
}

/**
 * Get image source URL, allowing override via ?src= query parameter.
 * @param {string} defaultUrl - The default image URL
 * @returns {string} The resolved image URL
 */
function getImageSource(defaultUrl) {
  var params = new URLSearchParams(window.location.search);
  var src = params.get('src');
  return src || defaultUrl;
}

/**
 * Show an error message near an element.
 * @param {HTMLElement} element - The reference element
 * @param {string} message - The message to display
 */
function showError(element, message) {
  var parent = element.parentNode;
  var errEl = parent.querySelector('.error-message');
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.className = 'error-message';
    parent.appendChild(errEl);
  }
  errEl.textContent = message;
  errEl.style.display = 'block';
}

/**
 * Hide the error message for an element.
 * @param {HTMLElement} element - The reference element
 */
function hideError(element) {
  var parent = element.parentNode;
  var errEl = parent.querySelector('.error-message');
  if (errEl) {
    errEl.style.display = 'none';
  }
}
