import { createI18n } from 'vue-i18n';
import pinia from '/@/stores/index';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import zhcnLocale from 'element-plus/lib/locale/lang/zh-cn';
import enLocale from 'element-plus/lib/locale/lang/en';
import viLocale from 'element-plus/lib/locale/lang/vi';

import nextZhcn from '/@/i18n/lang/zh-cn';
import nextEn from '/@/i18n/lang/en';
import nextVi from './lang/vi';

import pagesLoginZhcn from '/@/i18n/pages/login/zh-cn';
import pagesLoginEn from '/@/i18n/pages/login/en';
import pagesLoginVi from '/@/i18n/pages/login/vi';
import pagesFormI18nZhcn from '/@/i18n/pages/formI18n/zh-cn';
import pagesFormI18nEn from '/@/i18n/pages/formI18n/en';
import pagesFormI18nVi from '/@/i18n/pages/formI18n/vi';

// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
	[zhcnLocale.name]: {
		...zhcnLocale,
		message: {
			...nextZhcn,
			...pagesLoginZhcn,
			...pagesFormI18nZhcn,
		},
	},
	[enLocale.name]: {
		...enLocale,
		message: {
			...nextEn,
			...pagesLoginEn,
			...pagesFormI18nEn,
		},
	},
	[viLocale.name]: {
		...viLocale,
		message: {
			...nextVi,
			...pagesLoginVi,
			...pagesFormI18nVi,
		},
	},
};

// 读取 pinia 默认语言
const stores = useThemeConfig(pinia);
const { themeConfig } = storeToRefs(stores);

// 导出语言国际化
// https://vue-i18n.intlify.dev/guide/essentials/fallback.html#explicit-fallback-with-one-locale
export const i18n = createI18n({
	silentTranslationWarn: true,
	missingWarn: false,
	silentFallbackWarn: true,
	fallbackWarn: false,
	locale: themeConfig.value.globalI18n,
	fallbackLocale: zhcnLocale.name,
	messages,
});
