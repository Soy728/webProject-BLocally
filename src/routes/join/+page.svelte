<script lang="ts">
	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';
</script>

<div class="root">
	<div class="content">
		<div class="text">회원가입</div>
		<div class="button-container">
			<Button color={Palette.Color.ACCENT} link={'/join/customer'} size={ComponentSizeProps.XL}
				>소비자 회원가입</Button
			>
			<Button color={Palette.Color.ACCENT} link={'/join/seller'} size={ComponentSizeProps.XL}
				>판매자 회원가입</Button
			>
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 30rem;
		padding: 3rem 0rem;
		width: 100%;
		height: 100%;

		.content {
			width: 100%;
			gap: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.text {
				padding: 2rem;
				font-size: 1.8rem;
				font-weight: 500;
			}
			.button-container {
				padding-top: 3rem;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				gap: 2rem;
			}
		}
	}
</style>
