<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useAuthStore } from '@/state/modules/auth';
import { removeInterceptor, setupInterceptors } from '@/utils/interceptors';
import { useRouterStore } from '@/state/modules/router';
onLaunch(() => {
    console.log('App Launch');
    removeInterceptor();

    setupInterceptors();
    const appStore = useRouterStore();
    appStore.initialize();
});
onShow(() => {
    const authStore = useAuthStore();
    authStore.initToken();
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>
<style lang="scss">
@import '@/assets/main.scss';
</style>
