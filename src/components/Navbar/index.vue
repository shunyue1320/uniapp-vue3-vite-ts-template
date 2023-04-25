<script lang="ts" setup name="Navbar">
/**
 * 头部导航栏
 * @description 所有尺寸都用px2rpx做适配
 */
import { useSystem } from '@/hooks/useSystem';
import { px2rpx } from '@/utils/uniapi';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from '@/hooks/router';
import { useGlobalStyle } from '@/hooks/useGlobalStyle';
import Iconify from '@/components/Iconify/index.vue';
import { HOME_PAGE } from '@/enums/routerEnum';

const { navigationBarBackgroundColor, navigationBarTitleText, navigationBarTextStyle } = useGlobalStyle();

const { currentRoute, currentPages } = useRoute();

const props = defineProps({
    bgColor: { type: String },
    title: { type: String },
    titleColor: { type: String },
    titleSize: { type: [String, Number] },
    iconSize: { type: [String, Number] },
    gap: { type: Number, default: 8 },
    isBackShow: { type: Boolean, default: true },
    isHomeShow: { type: Boolean },
    shadow: { type: Boolean, default: true },
});

const { statusBarHeight } = useSystem();
const statusHeight = computed(() => `${px2rpx(statusBarHeight!)}rpx`);
const defaultNavbarHeight = ref(44);
const defaultTitleSize = ref(16);
const defaultIconSize = ref(24);
const navbarHeight = computed(() => `${px2rpx(defaultNavbarHeight.value)}rpx`);
const headHeight = computed(() => `${px2rpx((statusBarHeight || 0) + defaultNavbarHeight.value)}rpx`);
const sideGap = computed(() => `${px2rpx(props.gap)}rpx`);
const navbarBgColor = computed(() => props.bgColor || navigationBarBackgroundColor);
const navbarTitle = computed(() => props.title || currentRoute?.style?.navigationBarTitleText || navigationBarTitleText);
const navbarTitleColor = computed(() => props.titleColor || currentRoute?.style?.navigationBarTextStyle || navigationBarTextStyle);
const navbarTitleSize = computed(() => {
    return `${px2rpx(defaultTitleSize.value) || props.titleSize}rpx`;
});
const navbarLeftIconSize = computed(() => {
    return `${px2rpx(defaultIconSize.value) || props.titleSize}`;
});
const backShow = computed(() => {
    return currentPages.length > 1 && props.isBackShow;
});
const backHomeShow = computed(() => {
    return !currentRoute?.meta?.tabBar && props.isHomeShow;
});

const router = useRouter();
const onBack = () => {
    router.back();
};
const onBackHome = () => {
    router.pushTab(HOME_PAGE);
};
</script>
<template>
    <view class="head-wrapper">
        <view :class="['page-head', '_u_head-fixed', '_u_shadow']">
            <!-- 顶部状态栏 -->
            <view class="status-bar"></view>
            <!-- navbar -->
            <view :class="['navbar-wrapper', '_u_flex', '_u_flex-nowrap', '_u_justify-between', '_u_items-center']">
                <view class="_u_flex _u_flex-nowrap _u_items-center _u_h-full _u_w3/10 _u_min-w3/10">
                    <slot name="left">
                        <view class="_u_h-full _u_flex _u_items-center">
                            <template v-if="backShow">
                                <Iconify
                                    @click="onBack"
                                    :size="navbarLeftIconSize"
                                    :color="navbarTitleColor === true ? undefined : navbarTitleColor"
                                    icon="i-humbleicons-chevron-left"
                                />
                            </template>
                            <template v-if="backHomeShow">
                                <Iconify
                                    @click="onBackHome"
                                    :size="navbarLeftIconSize"
                                    :color="navbarTitleColor === true ? undefined : navbarTitleColor"
                                    icon="i-iconoir-home-simple-door"
                                />
                            </template>
                        </view>
                    </slot>
                </view>
                <view class="navbar__center _u_flex _u_flex-nowrap _u_justify-center _u_items-center _u_h-full _u_w2/5 _u_min-w2/5">
                    <slot>
                        <text>{{ navbarTitle }}</text>
                    </slot>
                </view>
                <view class="_u_flex _u_flex-nowrap _u_justify-end _u_items-center _u_h-full _u_w3/10 _u_min-w3/10">
                    <slot name="right"></slot>
                </view>
            </view>
        </view>
        <!-- 占位符 -->
        <view class="placeholder"></view>
    </view>
</template>
<style lang="scss" scoped>
.head-wrapper {
    .page-head {
        background: v-bind(navbarBgColor);
        .status-bar {
            height: v-bind(statusHeight);
        }
        .navbar-wrapper {
            height: v-bind(navbarHeight);
            padding-left: v-bind(sideGap);
            padding-right: v-bind(sideGap);
            .navbar__center {
                font-weight: bold;
                font-size: v-bind(navbarTitleSize);
                color: v-bind(navbarTitleColor);
            }
        }
    }
    &,
    .placeholder {
        height: v-bind(headHeight);
        min-height: v-bind(headHeight);
    }
}
</style>
