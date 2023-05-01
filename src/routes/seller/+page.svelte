<script lang="ts">
	import { Seller } from '@src/components-route/seller';
</script>

<div class="root">
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
	<Seller seller={{ sellerName: 'dummy', sellerLocation: '수원' }} />
</div>

<style lang="scss">
	.root {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		gap: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
</style>
