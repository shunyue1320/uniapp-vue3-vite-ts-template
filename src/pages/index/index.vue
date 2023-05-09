<script setup lang="ts">
import { ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';
import AppProvider from '@/components/AppProvider/inedx.vue';
import { useRouter } from 'uni-mini-router';
import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
import { judgePlatform } from '@/utils/platform';
import Iconify from '@/components/Iconify/index.vue';
import { getEnvValue } from '@/utils/env';
import _ from 'lodash-es';
// import mitter from '@/utils/eventBus';

const appTitle = getEnvValue<string>('VITE_APP_TITLE');

const title = ref(appTitle);

const platform = CURRENT_PLATFORM;

const isVue3 = judgePlatform(PLATFORMS.VUE3);

const router = useRouter();
const handleGetStarted = () => {
    router.pushTab({ path: '/pages/demo/index' });
};

const showLeft = ref();

const baseFormData = ref({
    dateRange: [], // 日期
    advertiserName: '', // 上游广告主
    upOfferId: '', // 上游OfferId
    publisherName: '', // 渠道
    offerId: '', // Offer ID
    offerName: '', // Offer Name
});

const submit = () => {
    // let newParams = _.omitBy(baseFormData.value, _.isEmpty);
    closeDrawer();
    // mitter.emit('baseForm', newParams);
};

// 抽屉状态发生变化触发
const change = (e: any, type: any) => {
    console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
};

const showDrawer = () => {
    showLeft.value.open();
};

// 关闭窗口
const closeDrawer = () => {
    showLeft.value.close();
};

// defineExpose({
//     showDrawer,
// });
</script>
<template>
    <AppProvider>
        <button @click="showDrawer">打开抽屉</button>
        <view class="SearchDrawer">
            <uni-drawer class="search-drawer-container" ref="showLeft" mode="right" :maskClick="false" :width="320" @change="change($event, 'showLeft')">
                <scroll-view class="search-form" scroll-y="true">
                    <uni-forms :model="baseFormData" label-position="top">
                        <uni-forms-item label="上游广告主" label-width="100">
                            <uni-datetime-picker v-model="baseFormData.dateRange" type="daterange" />
                        </uni-forms-item>
                        <uni-forms-item label="上游广告主" label-width="100">
                            <uni-easyinput v-model="baseFormData.advertiserName" placeholder="请输入上游广告主" />
                        </uni-forms-item>
                        <uni-forms-item label="上游OfferId" label-width="100">
                            <uni-easyinput v-model="baseFormData.upOfferId" placeholder="请输入上游OfferId" />
                        </uni-forms-item>
                        <uni-forms-item label="渠道" label-width="100">
                            <uni-easyinput v-model="baseFormData.publisherName" placeholder="请输入渠道" />
                        </uni-forms-item>
                        <uni-forms-item label="OfferId" label-width="100">
                            <uni-easyinput v-model="baseFormData.offerId" placeholder="请输入OfferId" />
                        </uni-forms-item>
                        <uni-forms-item label="OfferName" label-width="100">
                            <uni-easyinput v-model="baseFormData.offerName" placeholder="请输入OfferName" />
                        </uni-forms-item>
                    </uni-forms>
                    <view class="tool-container">
                        <button @click="submit()" class="mini-btn submit">确定</button>
                        <button @click="closeDrawer()" class="mini-btn cancel">取消</button>
                    </view>
                </scroll-view>
            </uni-drawer>
        </view>
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

.search-form {
    padding: 20rpx;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.search-drawer-container {
    overflow-y: scroll;
    .tool-container {
        display: flex;
        justify-content: center;
        align-items: center;
        .mini-btn {
            color: #fff;
            margin: 0 20rpx;
        }
        .submit {
            background-color: #1890ff;
        }
        .cancel {
            background-color: red;
        }
    }
}
</style>
