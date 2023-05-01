<script lang="ts">
	import type { SellerProps } from './index';

	export let seller: SellerProps;
</script>

<div class="root">
	<div class="seller-name">
		{seller.sellerName}
	</div>
</div>

<style lang="scss">
	.root {
		width: 15rem;
		height: 20rem;
		border: 1px solid gray;

		.seller-name {
			font-size: 1rem;
		}
	}
</style>
