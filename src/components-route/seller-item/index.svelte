<script lang="ts">
	import type { SellerItemProps } from './index';

	export let seller: SellerItemProps;
</script>

<div class="root">
	<div class="seller-name">
		{seller.sellerName}
	</div>
</div>

<style lang="scss">
	.root {
		border-radius: 0.5rem;
		width: 18rem;
		height: 22rem;
		border: 1px solid gray;
	}
</style>
