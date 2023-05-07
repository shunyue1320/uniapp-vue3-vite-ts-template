import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/state';
import { setupRouter } from '@/router';
import 'uno.css';

export function createApp() {
    const app = createSSRApp(App);

    setupRouter(app);
    setupStore(app);

    return {
        app,
    };
}
