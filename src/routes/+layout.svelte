<script lang="ts">
	import { Header } from '@src/components-route/header';
	import { QuickMenu } from '@src/components-route/quick-menu';
</script>

<div class="root">
	<Header />
	<div class="contents">
		<slot />
	</div>
	<!-- <QuickMenu /> -->
</div>

<style lang="scss">
	.root {
		width: 100%;
		padding: 1rem 1rem;

		.contents {
			max-width: 90rem;
			display: flex;
			align-items: center;
			justify-content: center;
			//	height: 100%;
			height: calc(100% - 13rem);
			padding: 1.5rem 4rem;
			margin: 0 auto;
		}
	}
</style>
