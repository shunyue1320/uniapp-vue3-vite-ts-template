import { request } from '@/utils/http';

const LOGIN = '/login';
const LOGIN_OUT = '/logout';
const REFRESH_TOKEN = '/refresh/token';

/**
 * 登录
 * @param params
 */
export function login(params: LoginParams) {
    return request.Post<LoginModel>(LOGIN, params);
}

/**
 * 登出
 */
export function logout() {
    return request.Post(LOGIN_OUT, {});
}

/**
 * 刷新token
 */
export function refreshToken() {
    return request.Post<LoginModel>(REFRESH_TOKEN, {});
}
