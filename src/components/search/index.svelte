<script lang="ts">
	import { IconPropType } from '@src/components/icon';
	import { mdiMagnify } from '@mdi/js';
	import { Input } from '@src/components/input';
	import { ComponentSizeProps } from '@src/util/size';

	import { attr } from '@src/util/style';

	export let placeholder: string = 'Search';
	let focus = false;
</script>

<div class="searchbar-container" data-focus={attr(focus)}>
	<Input
		bind:focus
		{placeholder}
		size={ComponentSizeProps.LG}
		width="100%"
		icon={{ type: IconPropType.PATH, src: mdiMagnify }}
	/>
</div>

<style lang="scss">
	.searchbar-container {
		display: flex;
		border-radius: 3rem;
		background-color: #f6f6f7;
		align-items: center;
		justify-content: center;
		height: 3.5rem;
		width: 100%;
		max-width: 40rem;
		padding: 0rem 1rem;
		border: 2px solid transparent;

		&[data-focus] {
			border: 2px solid #73b349;
		}
	}
</style>
