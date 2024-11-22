export function App() {

  const renderItem = (text: string) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <h4>{text}</h4>
      </div>
    )
  }

  const toolList = [
    '复制 copyToClipboard(text)',
    `深拷贝 deepClone({ a: 1, b: 2 })`
  ]

  // hexToRGB, rgbToHex, hexToRgba, adjustColorBrightness
  const colorList = [
    'rgb转hex color.rgbToHex(r, g, b)',
    'hex转rgb color.hexToRGB(hex)',
    'hex转rgba color.hexToRgba(hex',
    '调整亮度 color.adjustColorBrightness(hex, amount)',
  ]

  // isEnglish, isMobile, isPC
  const verifyList = [
    '是否是英文 verify.isEnglish(text)',
    '是否是移动端 verify.isMobile()',
    '是否是PC端 verify.isPC()',
  ]

  return (
    <>
      <h1>导入方式 : </h1>
      <h3>{`import { copyToClipboard, deepClone, color, verify } from '../core'`}</h3>
      <h1>工具类</h1>
      <h3>使用方法 : </h3>
      {toolList.map(renderItem)}
      <h1>颜色类</h1>
      <h3>使用方法 : </h3>
      {colorList.map(renderItem)}
      <h1>验证类</h1>
      <h3>使用方法 : </h3>
      {verifyList.map(renderItem)}
    </>
  )
}
