<script setup lang="ts">
import { ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';
import AppProvider from '@/components/AppProvider/inedx.vue';
import { useRouter } from 'uni-mini-router';
import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
import { judgePlatform } from '@/utils/platform';
import Iconify from '@/components/Iconify/index.vue';
import { getEnvValue } from '@/utils/env';

const appTitle = getEnvValue<string>('VITE_APP_TITLE');

const title = ref(appTitle);

const platform = CURRENT_PLATFORM;

const isVue3 = judgePlatform(PLATFORMS.VUE3);

const router = useRouter();
const handleGetStarted = () => {
    router.pushTab({ path: '/pages/demo/index' });
};
const change = (e: any) => {
    console.log('click => ', e);
};
</script>
<template>
    <AppProvider>
        <uni-grid :column="4" :highlight="true" @change="change">
            <uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
                <view class="grid-item-box" style="background-color: #fff">
                    <uni-icons type="image" :size="30" color="#777" />
                    <text class="text">文本信息</text>
                </view>
            </uni-grid-item>
        </uni-grid>
        <view class="content">
            <image class="logo" src="/static/svg/LOGO.svg" />
            <view class="text-area">
                <text class="">{{ title }}</text>
            </view>
            <view class="text-area">
                <text class="">是否是Vue3: {{ isVue3 }}</text>
            </view>
            <view class="text-area">
                <text class="_u_text-red">当前平台: {{ platform }}</text>
            </view>
            <BasicButton @click="handleGetStarted">Get Started → </BasicButton>
            <view class="_u_text-red">uno css</view>
            <Iconify icon="i-ph-anchor-simple-thin" size="65" />
            <Iconify icon="i-system-uicons-book-text" />
            <Iconify icon="i-system-uicons-battery-full" size="65" />
            <Iconify icon="i-system-uicons-box-add" :size="65" />
            <Iconify icon="i-system-uicons-bell-snooze" color="red" :size="65" />
        </view>
    </AppProvider>
</template>
<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 280rpx auto 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
    margin-bottom: 60rpx;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
