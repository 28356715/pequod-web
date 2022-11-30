<template>
	<div>
		<el-row>
		<el-col  
		        :xs="24"
				:sm="24"
				:md="24"
				:lg="12"
				:xl="12"
				:push="push"
		>
			<el-form
				ref="form"
				:model="sizeForm"
				:rules="rules"
				label-width="200px"
				label-position="top"
				size="large"
				style="width: 460px"
			>
			   <el-space fill>
				  <el-alert type="info" :closable="false">
					* {{ $t('message.create.createInfo') }}<br/>
					{{ $t('message.create.createLabelImage') }}
				  </el-alert>
			      <el-form-item  style="width: 300px;">
					<el-upload
						v-model:file-list="fileList"
						action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove"
					>
						<el-icon><Plus /></el-icon>
					</el-upload>

					<el-dialog v-model="dialogVisible">
						<img w-full :src="dialogImageUrl" alt="Preview Image" />
					</el-dialog>
				  </el-form-item>
				</el-space>

				<el-space fill>
				  <el-alert type="info" :closable="false" prop="name">
					* {{ $t('message.create.createItemName') }}<br/>
				  </el-alert>
			      <el-form-item   >
				    <el-input v-model="sizeForm.name" />
				  </el-form-item>
				</el-space>

				<el-space fill>
				  <el-alert type="info" :closable="false">
					*<span>{{ $t('message.create.createItemExternalLinks') }}</span><br/>
					{{ $t('message.create.createLabelExternalLinks') }}
				  </el-alert>
			      <el-form-item  >
				    <el-input v-model="sizeForm.name" />
				  </el-form-item>
				</el-space>

				<el-space fill>
				  <el-alert type="info" :closable="false">
					* {{ $t('message.create.createItemDescribe') }}<br/>
					{{ $t('message.create.createLabelDescribe') }}
				  </el-alert>
			      <el-form-item  >
				    <el-input v-model="sizeForm.name" />
				  </el-form-item>
				</el-space>

				<el-space fill>
				  <el-alert type="info" :closable="false">
					* {{ $t('message.create.createItemBlockchain') }}<br/>
				  </el-alert>
			      <el-form-item  >
					<el-select
					     v-model="sizeForm.region"
					     placeholder="please select your zone"
				         >
					     <el-option label="Zone one" value="shanghai" />
				     </el-select>				  
			      </el-form-item>
				</el-space>

				<el-form-item>
				<el-button type="primary" @click="onSubmit" style="margin-top:10px ;">{{ $t('message.create.createButton') }}</el-button>
				</el-form-item>
			</el-form>
	
		</el-col>
	</el-row>
	</div>

</template>

<script lang="ts" >
import { toRefs, reactive, defineComponent, onMounted, ref, watch, nextTick, onActivated } from 'vue';
import Detail from '/@/views/pequod/detail.vue';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps, UploadUserFile,FormRules } from 'element-plus';
import other from '/@/utils/other';



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
		const dialogImageUrl = ref('')
        const dialogVisible = ref(false)
		const size = ref('default')
        const labelPosition = ref('right')
		const push = ref(6)
	
		const state = reactive({
			formAccessibility: 
				{
					fullName: '',
                    firstName: '',
                    lastName: '',
				},
				fileList :[],
				sizeForm:{
						name: '',
						region: '',
						date1: '',
						date2: '',
						delivery: false,
						type: [],
						resource: '',
						desc: '',
						},

				rules:{
					name: [
					{ required: true, message: 'Please input Activity name', trigger: 'blur' },
				],
				}
		});

        function onSubmit() {
            console.log('submit!')
         }

		const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
          console.log(uploadFile, uploadFiles)
        }

        const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
           dialogImageUrl.value = uploadFile.url!
           dialogVisible.value = true
         }

		 onMounted(() => {
			push.value = other.isMobile()?0:6
			console.log("push==",push.value)
		});

		

		return {
			dialogVisible,
			dialogImageUrl,
			handlePictureCardPreview,
			handleRemove,
			onSubmit,
			size,
			labelPosition,
			push,
			...toRefs(state),
			// ...toRefs(rules),
		};
	},
});
</script>

<style scoped lang="scss">
.el-alert{
	border: 0em;
	margin-top: 0.5em;
}
.el-form-item{
	width: 300px;
	margin-bottom: 10px;
}

</style>
