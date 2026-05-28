<!-- 切换按钮 -->
<div align="right">
  <a href="#中文-简介" style="margin-right: 10px;">中文</a> | 
  <a href="#english-introduction">English</a>
</div>

<h1 id="中文-简介">风云卫星动态壁纸</h1>

使用风云四号 B 星等气象卫星实时图像制作的动态桌面壁纸。

## 壁纸布局

| 文件 | 描述 | 适用屏幕方向 |
|------|------|--------------|
| [earth+moon.html](earth+moon.html) | 完整地球圆盘 + NASA 每日月相图 | 横向 |
| [only_earth.html](only_earth.html) | 圆形地球圆盘（带更新时间戳） | 横/纵向 |
| [全圆盘真彩色合成图和Sandwich合成图切换.html](全圆盘真彩色合成图和Sandwich合成图切换.html) | 真彩色 / Sandwich 合成图自动切换 | 横/纵向 |
| [卫星图+桌面壁纸-局部放大.html](卫星图+桌面壁纸-局部放大.html) | 全球卫星图 + 局部放大图 | 横/纵向 |
| [圆形剪裁-无局部放大.html](圆形剪裁-无局部放大.html) | 圆形剪裁地球（无局部放大） | 横/纵向 |
| [矩形剪裁-无局部放大-全球云图.html](矩形剪裁-无局部放大-全球云图.html) | 矩形全球云图 | 横向 |

## 项目背景

见知乎文章：[https://zhuanlan.zhihu.com/p/648838771](https://zhuanlan.zhihu.com/p/648838771)

原作者提到：“如果你会代码，那可以做成其他形式。比如在全景地图的右下角再显示一个小窗，里面放上本省的放大卫星图岂不美滋滋。我不会代码，所以等有人来搞。”

本项目实现了这一想法。您可根据需要修改代码中的图像链接。

## 数据来源（均为 HTTPS 链接）

- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/SWCI/FY4B_DISK_SWCI.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/SWCI/FY4B_DISK_SWCI.JPG) - 风云四号 B 星全圆盘 Sandwich 合成图
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY3D/MIPS/FY3D_MERSI_GLOBAL.jpg](https://img.nsmc.org.cn/CLOUDIMAGE/FY3D/MIPS/FY3D_MERSI_GLOBAL.jpg) - 全球影像
- [https://img.nsmc.org.cn/CLOUDIMAGE/GEOS/MOS/IRX/PIC/GBAL/GEOS_IMAGR_GBAL_L2_MOS_IRX_GLL_YYYYMMDD_HHmm_10KM_MS.jpg](https://img.nsmc.org.cn/CLOUDIMAGE/GEOS/MOS/IRX/PIC/GBAL/GEOS_IMAGR_GBAL_L2_MOS_IRX_GLL_YYYYMMDD_HHmm_10KM_MS.jpg) - 静止卫星全球云图（需 JavaScript 动态替换时间为上一整点）
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG) - 风云四号 B 星全圆盘真彩色合成图
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_REGC_GCLR.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG) - 风云四号 B 星中国区域云图
- [https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=021](https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=021) - 月球图像来源（每日更新）

## 使用方式

1. 克隆或下载本仓库到本地
2. 直接用浏览器打开任意 HTML 文件（例如 `only_earth.html`）
3. 按 F11 进入全屏模式即可作为动态壁纸
4. 每 15-30 分钟自动刷新最新卫星图像（无闪烁）

### 高级用法

- 支持通过 `?src=URL` 查询参数自定义图像源
- 如需修改更新频率，可编辑 `assets/wallpaper.js` 中的 `refreshInterval` 变量
- 云图页面会自动对齐到上一整点（确保图源已发布）

## 示例效果

地球+月球
![地球+月球](https://github.com/user-attachments/assets/43025cf9-e73e-48ae-b97f-622e60d807aa)

带更新的地球
![带更新的地球](https://github.com/user-attachments/assets/5a7ca043-966c-491b-91a1-82b544b1ee19)

地球+局部放大
![地球+局部放大](https://github.com/user-attachments/assets/322771e4-9226-42ce-ab14-0aa5eed4b886)

## 源码结构

```bash
.
├── assets/              # 公共资源
│   ├── style.css       # 共用样式
│   └── wallpaper.js    # 共用逻辑（自动刷新、错误处理等）
├── index.html          # 入口导航页
├── 各个壁纸布局.html   # 共 6 个不同布局
├── README.md           # 本文档
├── LICENSE             # MIT 许可证
└── .gitignore          # Git 忽略配置
```

## 许可证

[MIT 许可证](LICENSE) - 您可以自由使用、修改和分发本项目的代码。

---

<h1 id="english-introduction">FengYun Dynamic Wallpaper</h1>

Real‑time satellite imagery wallpapers using FengYun‑4B and other meteorological satellites.

## Wallpaper Layouts

| Filename | Description | Orientation |
|----------|-------------|-------------|
| [earth+moon.html](earth+moon.html) | Full‑disk Earth with daily Moon phase from NASA | Landscape |
| [only_earth.html](only_earth.html) | Circular full‑disk Earth with update timestamp | Landscape / Portrait |
| [全圆盘真彩色合成图和Sandwich合成图切换.html](全圆盘真彩色合成图和Sandwich合成图切换.html) | True color / Sandwich composite switching | Landscape / Portrait |
| [卫星图+桌面壁纸‑局部放大.html](卫星图+桌面壁纸‑局部放大.html) | Full‑disk Earth + zoomed regional satellite view | Landscape / Portrait |
| [圆形剪裁‑无局部放大.html](圆形剪裁‑无局部放大.html) | Circular cropped Earth without regional zoom | Landscape / Portrait |
| [矩形剪裁‑无局部放大‑全球云图.html](矩形剪裁‑无局部放大‑全球云图.html) | Full rectangular global cloud map | Landscape |

## Background

See: [https://zhuanlan.zhihu.com/p/648838771](https://zhuanlan.zhihu.com/p/648838771)

The original author wrote: “If you know code, you can make it into other forms. For example, display a small window in the corner of the panoramic map showing an enlarged satellite image of your province.” This project implements that idea.

Modify the image URLs in the code according to your needs.

## Image Sources (HTTPS Only)

- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/SWCI/FY4B_DISK_SWCI.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/SWCI/FY4B_DISK_SWCI.JPG) – FY‑4B full‑disk Sandwich composite
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY3D/MIPS/FY3D_MERSI_GLOBAL.jpg](https://img.nsmc.org.cn/CLOUDIMAGE/FY3D/MIPS/FY3D_MERSI_GLOBAL.jpg) – Global imagery
- [https://img.nsmc.org.cn/CLOUDIMAGE/GEOS/MOS/IRX/PIC/GBAL/GEOS_IMAGR_GBAL_L2_MOS_IRX_GLL_YYYYMMDD_HHmm_10KM_MS.jpg](https://img.nsmc.org.cn/CLOUDIMAGE/GEOS/MOS/IRX/PIC/GBAL/GEOS_IMAGR_GBAL_L2_MOS_IRX_GLL_YYYYMMDD_HHmm_10KM_MS.jpg) – Geostationary satellite global cloud map (JavaScript automatically replaces placeholder with previous hour)
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG) – FY‑4B full‑disk true‑color composite
- [https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_REGC_GCLR.JPG](https://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_REGC_GCLR.JPG) – FY‑4B China region cloud map
- [https://moon.nasa.gov/moon‑observation/daily‑moon‑guide/?intent=021](https://moon.nasa.gov/moon‑observation/daily‑moon‑guide/?intent=021) – Moon image source (daily updates)

## Usage

1. Clone or download this repository.
2. Open any HTML file directly in a browser (e.g., `only_earth.html`).
3. Press F11 to enter full‑screen mode and use it as a live wallpaper.
4. Images refresh automatically every 15‑30 minutes without screen flicker.

### Advanced

- Custom image sources via the `?src=URL` query parameter.
- To change the refresh interval, edit the `refreshInterval` variable in `assets/wallpaper.js`.
- The cloud‑map page automatically aligns to the **previous full hour** to ensure the image has been published.

## Examples

Earth + Moon  
![Earth + Moon](https://github.com/user‑attachments/assets/43025cf9‑e73e‑48ae‑b97f‑622e60d807aa)

Earth with update time  
![Earth with time](https://github.com/user‑attachments/assets/5a7ca043‑966c‑491b‑91a1‑82b544b1ee19)

Earth + regional zoom  
![Earth + zoom](https://github.com/user‑attachments/assets/322771e4‑9226‑42ce‑ab14‑0aa5eed4b886)

## Project Structure

```bash
.
├── assets/              # Shared assets
│   ├── style.css       # Common styles
│   └── wallpaper.js    # Common logic (auto‑refresh, error handling, etc.)
├── index.html          # Landing page with layout overview
├── *.html              # Six different wallpaper layouts
├── README.md           # This documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## License

[MIT License](LICENSE) – You are free to use, modify, and distribute the code.

</textarea>