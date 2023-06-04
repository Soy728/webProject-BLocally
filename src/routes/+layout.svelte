<script lang="ts">
	import { Header } from '@src/components-route/header';
	import { QuickMenu } from '@src/components-route/quick-menu';
	import { Banner } from '@src/components-route/banner';
</script>

<div class="root">
	<Header />
	<slot />
</div>

<style lang="scss">
	.root {
		width: 100%;
		padding: 1rem 1rem;
	}
</style>
