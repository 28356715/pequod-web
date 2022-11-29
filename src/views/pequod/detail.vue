<template>
	<div class="detail-container">
		<el-row>
			<el-col :span="10" class="detail-col">
				<div> 
					<el-image :src="nft.nftImageUrl" fit="fill" />
				</div>
			</el-col>
			<el-col :span="12">
				<el-row>
					{{nft.udid}} {{nft.name}}
				</el-row>
				<el-row>
					<el-col :span="10">{{$t('message.treasure.treasureActivityPrice')}} : {{nft.totalPricing}} {{nft.settlementUnit}}</el-col>
					<el-col :span="10" >{{$t('message.treasure.treasureActivityDistancetoEndTime')}} : </el-col>
				</el-row>
				<el-row>
					<el-col :span="10">{{$t('message.treasure.treasureActivityRequiredNum')}} : {{nft.totalCopies}}</el-col>
					<el-col :span="10">{{$t('message.treasure.treasureActivityParticipantsNum')}} : {{nft.participantsNum}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">{{$t('message.treasure.treasureActivityReward')}} : {{nft.reward}} {{nft.rewardUnit}}</el-col>
					<el-col :span="10">{{$t('message.treasure.treasureActivityprogress')}} : </el-col>
				</el-row>
				<el-row>
					<el-col :span="10">{{$t('message.treasure.treasureActivityTicket')}} : {{nft.admission}} </el-col>
					<el-col :span="10">
					    <div class="demo-progress">
                          <el-progress  :percentage="50" :show-text ="false" :color="GRADIENT_MAIN_COLOR"/>
					    </div>
					</el-col>
				</el-row>
				<el-row >
					<el-button class="gradient-background-color font-white button-style">{{$t('message.treasure.treasureActivityButton1')}}</el-button>
				</el-row>
			</el-col>
		</el-row>
		<el-row style="padding: 30px;">
			<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane :label="$t('message.treasure.treasureRecord')" name="first">夺宝记录</el-tab-pane>
            <el-tab-pane :label="$t('message.treasure.refundRecord')" name="second">退款记录</el-tab-pane>
            <el-tab-pane label="PQD" name="third">PQD</el-tab-pane>
         </el-tabs>
        </el-row>
	</div>
</template>

<script lang="ts" >
import { toRefs, reactive, defineComponent, ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import { GRADIENT_MAIN_COLOR } from '/@/utils/config';


let global: any = {
	homeChartOne: null,
	homeChartTwo: null,
	homeCharThree: null,
	dispose: [null, '', undefined],
};

export default defineComponent({
	name: 'home',
	setup() {
		const activeName = ref('first')
		const state = reactive({
			nft: 
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
		});

		const handleClick = (tab: TabsPaneContext, event: Event) => {
                             console.log(tab, event)
                            }

		return {
			activeName,
			handleClick,
			GRADIENT_MAIN_COLOR,
			...toRefs(state),
		};
	},
});
</script>

<style scoped lang="scss">
$homeNavLengh: 8;
.detail-container {
	margin: 50px;
	.detail-col {
	margin-right: 20px;
	}
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

</style>
