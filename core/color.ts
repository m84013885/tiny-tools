type RGBColor = {
    r: number;
    g: number;
    b: number;
};
function hexToRGB(hex: string): RGBColor {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// rgb to hex
function rgbToHex(r: number, g: number, b: number) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
}

// hex to rgb
function hexToRgba(hex: string, a: number = 1) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    const r = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    }
    return `rgba(${r.r}, ${r.g}, ${r.b}, ${a})`
}

// 调整颜色亮度
function adjustColorBrightness(hex: string, amount: number): string {
    let { r, g, b } = hexToRGB(hex);

    // 确保颜色值在0到255之间
    const clamp = (value: number) => Math.max(0, Math.min(255, value));

    r = clamp(r + amount);
    g = clamp(g + amount);
    b = clamp(b + amount);

    return rgbToHex(r, g, b);
}

const color = { hexToRGB, rgbToHex, hexToRgba, adjustColorBrightness };

export default color;