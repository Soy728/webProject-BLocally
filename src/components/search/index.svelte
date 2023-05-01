<script lang="ts">
	import { Icon, IconPropType } from '@src/components/icon';
	import { mdiMagnify } from '@mdi/js';

	export let placeholder: string = 'Search';
</script>

<div class="searchbar-container">
	<div class="icon-search">
		<Icon icon={{ type: IconPropType.PATH, src: mdiMagnify }} />
	</div>
	<input type="text" {placeholder} />
</div>

<style lang="scss">
	.searchbar-container {
		display: flex;
		box-sizing: border-box;
		border-radius: 3rem;
		background-color: #f6f6f7;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		width: 100%;
		max-width: 45rem;
		position: relative;

		.icon-search {
			position: absolute;
			left: 1rem;
			width: 1.5rem;
			opacity: 0.3;
		}

		input {
			border: none;
			background-color: #f6f6f7;
			height: 100%;
			padding-left: 1rem;
			width: 80%;

			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
</style>
