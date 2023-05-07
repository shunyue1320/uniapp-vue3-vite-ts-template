/**
 * 平台
 */
export enum PLATFORMS {
    DEFAULT = 'DEFAULT' /* 默认 */,
    VUE3 = 'VUE3' /* HBuilderX 3.2.0+ */,
    APP_PLUS = 'APP-PLUS' /* App */,
    APP_PLUS_NVUE = 'APP-PLUS-NVUE' /* App nvue 页面 */,
    APP_NVUE = 'APP-NVUE' /* App nvue 页面 */,
    H5 = 'H5' /* H5 */,
    MP_WEIXIN = 'MP-WEIXIN' /* 微信小程序 */,
    MP_ALIPAY = 'MP-ALIPAY' /* 支付宝小程序 */,
    MP_BAIDU = 'MP_BAIDU' /* 百度小程序 */,
    MP_TOUTIAO = 'MP-TOUTIAO' /* 字节跳动小程序 */,
    MP_LARK = 'MP-LARK' /* 飞书小程序 */,
    MP_QQ = 'MP-QQ' /* QQ小程序 */,
    MP_KUAISHOU = 'MP-KUAISHOU' /* 快手小程序 */,
    MP_JD = 'MP-JD' /* 京东小程序 */,
    MP_360 = 'MP-360' /* 360小程序 */,
    MP = 'MP' /* 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ小程序/360小程序 */,
    QUICKAPP_WEBVIEW = 'QUICKAPP-WEBVIEW' /* 快应用通用(包含联盟、华为) */,
    QUICKAPP_WEBVIEW_UNION = 'QUICKAPP-WEBVIEW-UNION' /* 快应用联盟 */,
    QUICKAPP_WEBVIEW_HUAWEI = 'QUICKAPP-WEBVIEW-HUAWEI' /* 快应用华为 */,
}

/* 当前平台 */
export const CURRENT_PLATFORM = process.env['UNI_PLATFORM'];