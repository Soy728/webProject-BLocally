<script lang="ts">
	import _ from 'lodash';
	import { IconPropType, Icon } from '@src/components/icon';
	import { mdiMagnify } from '@mdi/js';
	import { Input } from '@src/components/input';
	import { ComponentSizeProps } from '@src/util/size';
	import { clickOutside } from '@src/util/actions/clickOutside';
	import { attr } from '@src/util/style';

	export let placeholder: string = 'Search';
	let focus = false;

	let value: string = '';
</script>

<div
	class="root"
	use:clickOutside={() => (focus = false)}
	on:click={() => {
		focus = true;
	}}
>
	<div class="searchbar-container" data-focus={attr(focus)}>
		<Input bind:value {placeholder} size={ComponentSizeProps.LG} width="100%">
			<Icon
				icon={{ type: IconPropType.PATH, src: mdiMagnify }}
				slot="icon"
				color={focus ? '#73b349' : '#333333'}
			/>
		</Input>
	</div>
	{#if !_.isEmpty(value)}
		<div class="search-box">No-items</div>
	{/if}
</div>

<style lang="scss">
	.root {
		width: 100%;
		max-width: 40rem;
		align-items: center;
		justify-content: center;
		display: flex;
		position: relative;
		.searchbar-container {
			display: flex;
			border-radius: 3rem;
			background-color: #f6f6f7;
			align-items: center;
			width: 100%;
			justify-content: center;
			height: 3.5rem;

			padding: 0rem 1rem;
			border: 2px solid transparent;

			&[data-focus] {
				border: 2px solid #73b349;
			}
		}

		.search-box {
			padding: 1rem;
			z-index: 10;
			height: fit-content;
			width: 100%;
			position: absolute;
			top: 4.2rem;
			background-color: #f6f6f7;
		}
	}
</style>
