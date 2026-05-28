# FengYun Dynamic Wallpaper

Real-time satellite imagery wallpapers using FengYun-4B and other meteorological satellites.

## Wallpaper Layouts

| Filename | Description | Orientation |
|----------|-------------|-------------|
| [earth+moon.html](earth+moon.html) | Full-disk Earth with daily Moon phase from NASA | Landscape |
| [only_earth.html](only_earth.html) | Circular full-disk Earth with update timestamp | Landscape / Portrait |
| [全圆盘真彩色合成图和Sandwich合成图切换.html](全圆盘真彩色合成图和Sandwich合成图切换.html) | True color / Sandwich composite switching | Landscape / Portrait |
| [卫星图+桌面壁纸-局部放大.html](卫星图+桌面壁纸-局部放大.html) | Full-disk Earth + zoomed regional satellite view | Landscape / Portrait |
| [圆形剪裁-无局部放大.html](圆形剪裁-无局部放大.html) | Circular cropped Earth without regional zoom | Landscape / Portrait |
| [矩形剪裁-无局部放大-全球云图.html](矩形剪裁-无局部放大-全球云图.html) | Full rectangular global cloud map | Landscape |

## Background

See: https://zhuanlan.zhihu.com/p/648838771

The original author wrote: "If you know code, you can make it into other forms. For example, display a small window in the corner of the panoramic map showing an enlarged satellite image of your province." This project implements that idea.

Modify the image URLs in the code according to your needs.

## Image Sources

- http://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/SWCI/FY4B_DISK_SWCI.JPG - FY-4B full-disk Sandwich composite
- http://img.nsmc.org.cn/CLOUDIMAGE/FY3D/MIPS/FY3D_MERSI_GLOBAL.jpg - Global imagery
- http://img.nsmc.org.cn/CLOUDIMAGE/GEOS/MOS/IRX/PIC/GBAL/GEOS_IMAGR_GBAL_L2_MOS_IRX_GLL_YYYYMMDD_HHmm_10KM_MS.jpg - Geostationary satellite global cloud map
- http://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_DISK_GCLR.JPG - FY-4B full-disk true color composite
- http://img.nsmc.org.cn/CLOUDIMAGE/FY4B/AGRI/GCLR/FY4B_REGC_GCLR.JPG - FY-4B China region cloud map
- https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=021 - Moon image source

## Examples

Earth + Moon
![Earth + Moon](https://github.com/user-attachments/assets/43025cf9-e73e-48ae-b97f-622e60d807aa)

Earth with update time
![Earth with time](https://github.com/user-attachments/assets/5a7ca043-966c-491b-91a1-82b544b1ee19)

Earth + regional zoom
![Earth + zoom](https://github.com/user-attachments/assets/322771e4-9226-42ce-ab14-0aa5eed4b886)

## License

[MIT](LICENSE)
