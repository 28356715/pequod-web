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
                    <el-row>
                        <el-popover placement="bottom" :width="500" trigger="click">
                                      <template #reference>
                                        <el-button class="button-loot-style button-style">{{$t('message.treasure.treasureActivityButton2')}}</el-button>
                                      </template>
                                      <el-form
                                        ref="eventFormRef"
                                        :model="treasureTask"
                                        class="demo-dynamic"
                                      >
                                        <el-form-item
                                          prop="price"
                                          :label="$t('message.treasure.treasureActivityPrice')"
                                          :rules="[
                                            {
                                              required: true,
                                              message: '售价不能为空',
                                              trigger: 'blur',
                                            },
                                          ]"
                                        >
                                        <el-input v-model="treasureTask.totalPricing" style="width:50%"/>{{treasureTask.settlementUnit}}
                                        </el-form-item>
                                            <el-form-item :label="$t('message.treasure.treasureActivitySplitsNum')">
                                              <el-radio-group v-model="treasureTask.totalCopies">
                                                <el-radio label="50" />
                                                <el-radio label="100" />
                                                <el-radio label="200" />
                                                <el-radio label="500" />
                                              </el-radio-group>
                                            </el-form-item>
                                            <el-form-item :label="$t('message.treasure.treasureActivityDuration')">
                                              <el-radio-group v-model="treasureTask.time">
                                                <el-radio label="24" />
                                                <el-radio label="36"  />
                                                <el-radio label="48" />
                                              </el-radio-group>
                                            </el-form-item>
                                            <el-form-item :label="$t('message.treasure.treasureActivityPeriod')">
                                              <el-radio-group v-model="treasureTask.exchangeWindow">
                                                <el-radio label="24" />
                                                <el-radio label="36"  />
                                                <el-radio label="48" />
                                              </el-radio-group>
                                            </el-form-item>
                                            <el-form-item
                                                prop="price"
                                                :label="$t('message.treasure.treasureActivityReward')">
                                                <el-input v-model="treasureTask.reward" style="width:50%"/>{{treasureTask.rewardUnit}}
                                            </el-form-item>
                                            <el-form-item
                                                prop="price"
                                                :label="$t('message.treasure.treasureActivityTicket')">
                                                <el-input v-model="treasureTask.tickets" style="width:50%"/>{{treasureTask.rewardUnit}}
                                            </el-form-item>
                                        <el-form-item>
                                          <el-button  class="button-loot-style">{{$t('message.treasure.treasureActivityButton2')}}</el-button>
                                        </el-form-item>
                                      </el-form>
                                 </el-popover>
                    </el-row>														
				</div>
			</el-col>
		</el-row>
	</div>

</template>

<script lang="ts" >
import { toRefs, reactive, defineComponent, onMounted, ref, watch, nextTick, onActivated } from 'vue';
import * as echarts from 'echarts';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';
import other from '/@/utils/other';


let global: any = {
	homeChartOne: null,
	homeChartTwo: null,
	homeCharThree: null,
	dispose: [null, '', undefined],
};

export default defineComponent({
	name: 'home',
	components: {  },
	setup() {
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
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数，计算进度条
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
					state:1,//成功 失败  兑换倒计时  进行中 4个状态
					exchangeTime:9999999999//时间戳，兑换时间倒计时
				},
				{
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址

				},
				{
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址

				},
				{
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址

				},
				{
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
                {
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
                {
					udid: '#1234',
					name: 'monkey',
					totalPricing: '100',
					settlementUnit: 'USDT',//USDT/PQD
					totalCopies: 100,//份数
					reward: 1000,//奖励
					rewardUnit: 'PQD',//USDT/PQD
					admission:1,//门票
					participantsNum:90,//已参与人数
					nftImageUrl:"https://ipfs.io/ipfs/QmSWoRgRzjb1t76tj2owXwb1APbSWUeAfz46W8ZxvevxKV",//nft图片地址
				},
			],
            treasureTask:{
                totalPricing:100,
                settlementUnit:'USDT',
                time:24,
                totalCopies:100,
                exchangeWindow:24,
                reward: 1000,//奖励
				rewardUnit: 'PQD',//USDT/PQD
                tickets:0 //计算所得
                
            }
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
			// height: 130px;
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
