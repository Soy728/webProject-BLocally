<script lang="ts">
</script>

<div class="root">
	<div class="latest">
		<div class="text">최근 본 상품</div>
		<div class="product-group">
			<div class="product" />
			<div class="product" />
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		position: fixed;
		bottom: 40px;
		right: 40px;
		z-index: 100;
		width: 7rem;
		.latest {
			.text {
				width: 100%;
				padding: 1rem;
				display: flex;
				justify-content: center;
			}
			.product-group {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				.product {
					height: 7rem;
					width: 7rem;
					border: 1px solid black;
					border-radius: 0.3rem;
				}
			}
		}
	}
</style>
