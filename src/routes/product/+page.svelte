<script lang="ts">
	import { ProductItem } from '@src/components-route/product-item';
</script>

<div class="root">
	<div class="best-seller-banner">BEST SELLER BANNER</div>
	<div class="product-items">
		{#each Array(3) as _, idx}
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		height: 100%;
		.best-seller-banner {
			height: 25rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.product-items {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
</style>
