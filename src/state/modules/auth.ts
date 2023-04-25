import { defineStore } from 'pinia';
import { getCache, removeCache, setCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { logout } from '@/services/api/auth';

interface AuthState {
    token?: string;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: undefined,
    }),
    getters: {
        getToken: (state) => state.token,
        isLogin: (state): boolean => !!state.token,
        getAuthorization: (state) => {
            return state.token ? { authorization: `Bearer ${state.token}` } : {};
        },
    },
    actions: {
        initToken() {
            this.token = getCache<string>(TOKEN_KEY) || undefined;
        },
        setToken(token: string | undefined) {
            setCache(TOKEN_KEY, token);
            this.token = token;
        },
        /**
         * @description 登出
         */
        async loginOut(): Promise<any> {
            try {
                const res = await logout();
                removeCache(TOKEN_KEY);
                this.setToken(undefined);
                return Promise.resolve(res);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        /**
         * @description 刷新token
         */
        // async refreshToken(): Promise<LoginModel> {
        //     try {
        //         const { data } = await refreshToken();
        //         this.setToken(data.token);
        //         return Promise.resolve(data);
        //     } catch (err: any) {
        //         return Promise.reject(err);
        //     }
        // },
    },
});
