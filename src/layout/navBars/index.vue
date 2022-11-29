<template>
	<div class="layout-navbars-container">
		<BreadcrumbIndex />
		<TagsView />

	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BreadcrumbIndex from '/@/layout/navBars/breadcrumb/index.vue';
import TagsView from '/@/layout/navBars/tagsView/tagsView.vue';

// import TagsView from './tagsView/tagsView.vue';

export default defineComponent({
	name: 'layoutNavBars',
	components: { BreadcrumbIndex ,TagsView},

});
</script>

<style scoped lang="scss">
.layout-navbars-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 150%;
}
</style>
