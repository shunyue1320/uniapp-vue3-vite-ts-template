import { App } from 'vue';
import { createRouter } from 'uni-mini-router';
import { createRouterGuard } from './guard';

const router = createRouter({
    routes: [...ROUTES], // 路由表信息
});

export function setupRouter(app: App<Element>) {
    // 配置路由器守卫
    createRouterGuard(router);
    app.use(router);
}

export { router };