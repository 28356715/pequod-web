<template>
	<div class="home-container">

		<el-row :gutter="15" class="home-card-one mb15">
			<el-col
				:xs="12"
				:sm="8"
				:md="8"
				:lg="4"
				:xl="4"
				v-for="(v, k) in nfts"
				:key="k"
				:class="{ 'home-media home-media-lg': k > 1, 'home-media-sm': k === 1 }"
				style="margin:5px 0 5px 0;"
			>
			    <div class="home-card-item ">
					<el-row >
					  <el-image :src="v.nftImageUrl" fit="fill" />
                    </el-row>
                    <el-row>{{v.udid}}{{v.name}}</el-row>
					<el-row>{{$t('message.explore.explorePagePrice')}}: {{v.price}}</el-row>
					<el-row><el-button>{{$t('message.explore.explorePageBuy')}}</el-button></el-row>
				</div>
			</el-col>
		</el-row>

	    <el-drawer v-model="drawer"  :with-header="false" :direction="direction" size="50%">
          <Detail/>
        </el-drawer>
	</div>

</template>

<script lang="ts" >
import { toRefs, reactive, defineComponent, onMounted, ref, watch, nextTick, onActivated } from 'vue';
import * as echarts from 'echarts';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';
import Detail from '/@/views/pequod/detail.vue';
import other from '/@/utils/other';
import { GRADIENT_MAIN_COLOR } from '/@/utils/config';
import { useI18n } from 'vue-i18n';





let global: any = {
	homeChartOne: null,
	homeChartTwo: null,
	homeCharThree: null,
	dispose: [null, '', undefined],
};

export default defineComponent({
	name: 'home',
	components: { Detail },
	setup() {
		const { t } = useI18n();
		const homeLineRef = ref();
		const homePieRef = ref();
		const homeBarRef = ref();
		const storesTagsViewRoutes = useTagsViewRoutes();
		const storesThemeConfig = useThemeConfig();
		const { themeConfig } = storeToRefs(storesThemeConfig);

		const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
		const drawer = ref(false);
		const direction =ref('ttb')
		const state = reactive({
			nfts: [
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
				{
					udid: '#1234',
					name: 'monkey',
					price: '100',
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
			],
		});
		const openDrawer = ()=>{
			direction.value = other.isMobile()?'ttb':'rtl'
			drawer.value = true
		}
		
		return {
			homeLineRef,
			homePieRef,
			homeBarRef,
			drawer,
			direction,
			GRADIENT_MAIN_COLOR,
			openDrawer,
			...toRefs(state),
		};
	},
});
</script>

<style scoped lang="scss">
$homeNavLengh: 8;
.home-container {
	overflow: hidden;
	.home-card-one,
	.home-card-two,
	.home-card-three {
		.home-card-item {
			width: 100%;
			height: 250px;
			border-radius: 4px;
			transition: all ease 0.3s;
			padding: 10px;
			overflow: hidden;
			background: var(--el-color-white);
			color: var(--el-text-color-primary);
			border: 1px solid var(--next-border-color-light);
			&:hover {
				box-shadow: 0 2px 12px var(--next-color-dark-hover);
				transition: all ease 0.3s;
			}
			&-icon {
				width: 70px;
				height: 70px;
				border-radius: 100%;
				flex-shrink: 1;
				i {
					color: var(--el-text-color-placeholder);
				}
			}
			&-title {
				font-size: 15px;
				font-weight: bold;
				height: 30px;
			}
		}
	}
	.home-card-one {
		@for $i from 0 through 3 {
			.home-one-animation#{$i} {
				opacity: 0;
				animation-name: error-num;
				animation-duration: 0.5s;
				animation-fill-mode: forwards;
				animation-delay: calc($i/10) + s;
			}
		}
	}
	.float-right{
		float:right,
	}
	.home-card-two,
	.home-card-three {
		.home-card-item {
			height: 400px;
			width: 100%;
			overflow: hidden;
			.home-monitor {
				height: 100%;
				.flex-warp-item {
					width: 25%;
					height: 111px;
					display: flex;
					.flex-warp-item-box {
						margin: auto;
						text-align: center;
						color: var(--el-text-color-primary);
						display: flex;
						border-radius: 5px;
						background: var(--next-bg-color);
						cursor: pointer;
						transition: all 0.3s ease;
						&:hover {
							background: var(--el-color-primary-light-9);
							transition: all 0.3s ease;
						}
					}
					@for $i from 0 through $homeNavLengh {
						.home-animation#{$i} {
							opacity: 0;
							animation-name: error-num;
							animation-duration: 0.5s;
							animation-fill-mode: forwards;
							animation-delay: calc($i/10) + s;
						}
					}
				}
			}
		}
	}
	.demo-progress  {
    //    margin: 10px;
       width: 70px;
       }

	ul li{
		display: inline;
		overflow: hidden;
		margin: 30px 20px 20px 20px;
	}
}
</style>
