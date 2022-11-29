<template>
	<div class="layout-navbars-tagsview">
        <span>{{$route.name}}</span>
        <el-divider style="margin: 10px;"/>
	</div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
import { useRouter } from "vue-router";
 
export default defineComponent({
  name: "User",
  setup() {
    const router = useRouter();
    const uTitle = router.currentRoute.value.params.title;
    return {
      // 返回的数据
      uTitle,
    };
  },
});
</script>

<style scoped lang="scss">
.layout-navbars-tagsview {
	// background-color: var(--el-color-white);
	// border-bottom: 1px solid var(--next-border-color-light);
	position: relative;
	z-index: 4;
    height: auto;
    margin: 10px 0 50px 20px;
    color: #606266;
    font-size: 16px;
    font-weight:bold;
	}
	// 风格4
	
.layout-navbars-tagsview-shadow {
	box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
}
</style>