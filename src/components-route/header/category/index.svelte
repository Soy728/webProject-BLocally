<script lang="ts">
	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';
	let size: ComponentSizeProps = ComponentSizeProps.LG;
</script>

<div class="root">
	<div class="category-container">
		<Button color={Palette.Color.SECONDARY} ghost link={'/'} {size}>홈</Button>
		<Button color={Palette.Color.SECONDARY} ghost link={'/seller'} {size}>로컬농장</Button>
		<Button color={Palette.Color.SECONDARY} ghost link={'/product'} {size}>상품</Button>
		<Button color={Palette.Color.SECONDARY} ghost link={'/regular-delivery'} {size}>정기배송</Button
		>
		<Button color={Palette.Color.SECONDARY} ghost {size}>이벤트</Button>
		<Button color={Palette.Color.SECONDARY} ghost {size}>농장체험</Button>
	</div>
</div>

<style lang="scss">
	.root {
		width: 100%;
		height: 5rem;
		display: flex;
		align-items: end;
		padding: 0.5rem;
		border-bottom: 1px solid rgba(128, 128, 128, 0.315);

		.category-container {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2.5rem;
			white-space: nowrap;
		}
	}
</style>
