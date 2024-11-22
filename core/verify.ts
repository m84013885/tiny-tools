const isUrl = (url: string): boolean => {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url);
}

const isEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isPhone = (phone: string): boolean => {
    return /^1[3-9]\d{9}$/.test(phone);
}

const isNumber = (number: string): boolean => {
    return /^\d+$/.test(number);
}

const isChinese = (text: string): boolean => {
    return /^[\u4e00-\u9fa5]+$/.test(text);
}

const isEnglish = (text: string): boolean => {
    return /^[a-zA-Z]+$/.test(text);
}

const isIOS = (): boolean => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const isAndroid = (): boolean => {
    return /Android/i.test(navigator.userAgent);
}

const isMobile = (): boolean => {
    return isIOS() || isAndroid();
}

const isPC = (): boolean => {
    return !isMobile();
}

const verify = { isUrl, isEmail, isPhone, isNumber, isChinese, isEnglish, isIOS, isAndroid, isMobile, isPC };

export default verify;