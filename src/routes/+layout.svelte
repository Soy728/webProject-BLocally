<script lang="ts">
	import { Header } from '@src/components-route/header';
	import { QuickMenu } from '@src/components-route/quick-menu';
</script>

<div class="root">
	<Header />
	<div class="contents">
		<slot />
	</div>
	<QuickMenu />
</div>

<style lang="scss">
	.root {
		width: 100%;
		height: 100%;
		padding: 1rem 0rem;

		.contents {
			max-width: 90rem;
			width: 100%;
			height: 100%;
			padding: 1.5rem 4rem;
			margin: 0 auto;
		}
	}
</style>
