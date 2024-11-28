### tiny-tool

## 简单的导入
```
    import { copyToClipboard, deepClone, color, verify } from 'tiny-tools-mw'
    const { hexToRGB, rgbToHex, hexToRgba, adjustColorBrightness } = color
    const { isUrl, isEmail, isPhone, isNumber, isChinese, isEnglish, isIOS, isAndroid, isMobile, isPC } = verify
    
```
----
## copyToClipboard 复制
简单的复制文本的方法
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 | 
|---------|---------|--------- |---------|---------|
| text | string | 'y' | 复制的文本 | 否 |
----
```
await copyToClipboard('test') // true or false
```