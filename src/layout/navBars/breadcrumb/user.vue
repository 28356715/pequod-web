<template>
	<div class="layout-navbars-breadcrumb-user pr15" :style="{ flex: layoutUserFlexNum }">
		<el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" @command="onLanguageChange">
			<div class="layout-navbars-breadcrumb-user-icon">
				<i class="iconfont" :class="disabledI18n === 'en' ? 'icon-fuhao-yingwen' : 'icon-fuhao-zhongwen'" :title="$t('message.user.title1')"></i>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="zh-cn" :disabled="disabledI18n === 'zh-cn'">简体中文</el-dropdown-item>
					<el-dropdown-item command="en" :disabled="disabledI18n === 'en'">English</el-dropdown-item>
					<!-- <el-dropdown-item command="zh-tw" :disabled="disabledI18n === 'zh-tw'">ViệtName</el-dropdown-item> -->
					<el-dropdown-item command="vi" :disabled="disabledI18n === 'vi'">ViệtName</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
		
		<div class="layout-navbars-breadcrumb-user-icon" @click="onLayoutSetingClick">
			<i class="icon-skin iconfont" :title="$t('message.user.title3')"></i>
		</div>
		<!-- 个人中心 -->
		<el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
			<span class="layout-navbars-breadcrumb-user-link">
				<img :src="userInfos.photo" class="layout-navbars-breadcrumb-user-link-photo mr5" />
				{{ userInfos.userName === '' ? 'common' : userInfos.userName }}
				<el-icon class="el-icon--right">
					<ele-ArrowDown />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="/home">{{ $t('message.user.dropdown1') }}</el-dropdown-item>
					<el-dropdown-item command="wareHouse">{{ $t('message.user.dropdown6') }}</el-dropdown-item>
					<el-dropdown-item command="/personal">{{ $t('message.user.dropdown2') }}</el-dropdown-item>
					<el-dropdown-item command="/404">{{ $t('message.user.dropdown3') }}</el-dropdown-item>
					<el-dropdown-item command="/401">{{ $t('message.user.dropdown4') }}</el-dropdown-item>
					<el-dropdown-item divided command="logOut">{{ $t('message.user.dropdown5') }}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
		<Search ref="searchRef" />
	</div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, computed, reactive, toRefs, onMounted, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
import screenfull from 'screenfull';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useUserInfo } from '/@/stores/userInfo';
import { useThemeConfig } from '/@/stores/themeConfig';
import other from '/@/utils/other';
import { Session, Local } from '/@/utils/storage';
import UserNews from '/@/layout/navBars/breadcrumb/userNews.vue';
import Search from '/@/layout/navBars/breadcrumb/search.vue';

export default defineComponent({
	name: 'layoutBreadcrumbUser',
	components: { UserNews, Search },
	setup() {
		const { t } = useI18n();
		const { proxy } = <any>getCurrentInstance();
		const router = useRouter();
		const stores = useUserInfo();
		const storesThemeConfig = useThemeConfig();
		const { userInfos } = storeToRefs(stores);
		const { themeConfig } = storeToRefs(storesThemeConfig);
		const searchRef = ref();
		const state = reactive({
			isScreenfull: false,
			disabledI18n: 'en',
			disabledSize: 'large',
		});
		// 设置分割样式
		const layoutUserFlexNum = computed(() => {
			let num: string | number = '';
			const { layout, isClassicSplitMenu } = themeConfig.value;
			const layoutArr: string[] = ['defaults', 'columns'];
			if (layoutArr.includes(layout) || (layout === 'classic' && !isClassicSplitMenu)) num = '1';
			else num = '';
			return num;
		});
		// 全屏点击时
		const onScreenfullClick = () => {
			if (!screenfull.isEnabled) {
				ElMessage.warning('暂不不支持全屏');
				return false;
			}
			screenfull.toggle();
			screenfull.on('change', () => {
				if (screenfull.isFullscreen) state.isScreenfull = true;
				else state.isScreenfull = false;
			});
		};
		// 布局配置 icon 点击时
		const onLayoutSetingClick = () => {
			proxy.mittBus.emit('openSetingsDrawer');
		};
		// 下拉菜单点击时
		const onHandleCommandClick = (path: string) => {
			if (path === 'logOut') {
				ElMessageBox({
					closeOnClickModal: false,
					closeOnPressEscape: false,
					title: t('message.user.logOutTitle'),
					message: t('message.user.logOutMessage'),
					showCancelButton: true,
					confirmButtonText: t('message.user.logOutConfirm'),
					cancelButtonText: t('message.user.logOutCancel'),
					buttonSize: 'default',
					beforeClose: (action, instance, done) => {
						if (action === 'confirm') {
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = t('message.user.logOutExit');
							setTimeout(() => {
								done();
								setTimeout(() => {
									instance.confirmButtonLoading = false;
								}, 300);
							}, 700);
						} else {
							done();
						}
					},
				})
					.then(async () => {
						// 清除缓存/token等
						Session.clear();
						// 使用 reload 时，不需要调用 resetRoute() 重置路由
						window.location.reload();
					})
					.catch(() => {});
			} else if (path === 'wareHouse') {
				window.open('https://gitee.com/lyt-top/vue-next-admin');
			} else {
				router.push(path);
			}
		};
		// 菜单搜索点击
		const onSearchClick = () => {
			searchRef.value.openSearch();
		};
		// 组件大小改变
		const onComponentSizeChange = (size: string) => {
			Local.remove('themeConfig');
			themeConfig.value.globalComponentSize = size;
			Local.set('themeConfig', themeConfig.value);
			initComponentSize();
			window.location.reload();
		};
		// 语言切换
		const onLanguageChange = (lang: string) => {
			Local.remove('themeConfig');
			themeConfig.value.globalI18n = lang;
			Local.set('themeConfig', themeConfig.value);
			proxy.$i18n.locale = lang;
			console.log("lang===",proxy.$i18n.locale)
			initI18n();
			other.useTitle();
		};
		// 设置 element plus 组件的国际化
		const setI18nConfig = (locale: string) => {
			proxy.mittBus.emit('getI18nConfig', proxy.$i18n.messages[locale]);
		};
		// 初始化言语国际化
		const initI18n = () => {
			switch (Local.get('themeConfig').globalI18n) {
				case 'zh-cn':
					state.disabledI18n = 'zh-cn';
					setI18nConfig('zh-cn');
					break;
				case 'en':
					state.disabledI18n = 'en';
					setI18nConfig('en');
					break;
				case 'vi':
					state.disabledI18n = 'vi';
					setI18nConfig('vi');
					break;
			}
		};
		// 初始化全局组件大小
		const initComponentSize = () => {
			switch (Local.get('themeConfig').globalComponentSize) {
				case 'large':
					state.disabledSize = 'large';
					break;
				case 'default':
					state.disabledSize = 'default';
					break;
				case 'small':
					state.disabledSize = 'small';
					break;
			}
		};
		// 页面加载时
		onMounted(() => {
			if (Local.get('themeConfig')) {
				initI18n();
				initComponentSize();
			}
		});
		return {
			userInfos,
			onLayoutSetingClick,
			onHandleCommandClick,
			onScreenfullClick,
			onSearchClick,
			onComponentSizeChange,
			onLanguageChange,
			searchRef,
			layoutUserFlexNum,
			...toRefs(state),
		};
	},
});
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-user {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&-link {
		height: 100%;
		display: flex;
		align-items: center;
		white-space: nowrap;
		&-photo {
			width: 25px;
			height: 25px;
			border-radius: 100%;
		}
	}
	&-icon {
		padding: 0 10px;
		cursor: pointer;
		color: var(--next-bg-topBarColor);
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
		&:hover {
			background: var(--next-color-user-hover);
			i {
				display: inline-block;
				animation: logoAnimation 0.3s ease-in-out;
			}
		}
	}
	:deep(.el-dropdown) {
		color: var(--next-bg-topBarColor);
	}
	:deep(.el-badge) {
		height: 40px;
		line-height: 40px;
		display: flex;
		align-items: center;
	}
	:deep(.el-badge__content.is-fixed) {
		top: 12px;
	}
}
</style>