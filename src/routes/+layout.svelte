<script lang="ts">
	import { Header } from '@src/components-route/header';
</script>

<div class="root">
	<Header />
	<slot />
</div>

<style lang="scss">
	.root {
		overflow: hidden;
		width: 100%;
		padding: 1rem 1rem;
	}
</style>
