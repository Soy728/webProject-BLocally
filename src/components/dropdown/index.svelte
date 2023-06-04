<script lang="ts">
	type T = $$Generic;

	import { mdiChevronDown } from '@mdi/js';
	import { Icon, IconPropType } from '@src/components/icon';
	import { clickOutside } from '@src/util/actions/clickOutside';
	import { attr } from '@src/util/style';
	import type { DropdownItem } from './';

	export let items: DropdownItem<T>[] = [];
	export let selectedId: T;
	export let open: boolean = false;
	export let direction: 'top' | 'bottom' = 'bottom';

	let selectedItem: DropdownItem<T> | undefined = items.find((item) => item.id === selectedId);

	$: {
		selectedItem = items.find((item) => item.id === selectedId);
	}
</script>

<div
	data-dropdown
	class="root"
	use:clickOutside={() => {
		open = false;
	}}
>
	<div
		class="button-field"
		on:click={() => {
			open = !open;
		}}
	>
		<div class="text">
			{selectedItem?.text}
		</div>

		<div class="icon">
			<Icon
				icon={{
					type: IconPropType.PATH,
					src: mdiChevronDown,
					scale: 0.65
				}}
				rotate={open ? 180 : 0}
				style={{ transition: `transform 0.1s linear` }}
			/>
		</div>
	</div>
	<div class="drop-flag">
		<div class="drop-field" data-open={attr(open)} data-direction={direction}>
			{#if $$slots.default}
				{#each items as item}
					<div
						class="item"
						data-selected={item.id === selectedId}
						on:click={() => {
							selectedId = item.id;
							open = !open;
						}}
					>
						<slot {item} />
					</div>
				{/each}
			{:else}
				{#each items as item}
					<div
						class="item"
						on:click={() => {
							selectedId = item.id;
							open = !open;
						}}
					>
						{item.text}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		width: 10rem;

		.button-field {
			height: 1.3rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 0.82rem;
			font-weight: 600;
			height: fit-content;
			padding: 0.1rem 0.2rem 0.1rem 0.8rem;

			border: solid 1px rgb(217, 217, 217);
			border-radius: 0.2rem;
			&:hover {
				cursor: pointer;
			}
			.text {
				display: flex;
				align-items: center;
				height: 100%;
				line-height: 1.3rem;
			}
			.icon {
				padding-left: 0.2rem;
			}
		}
		.drop-flag {
			width: 100%;
			position: relative;
		}
		.drop-field {
			border-radius: 0.2rem;
			width: 100%;
			position: relative;
			height: fit-content;
			max-height: 12rem;
			overflow-y: scroll;
			border: solid 1px rgb(217, 217, 217);
			position: absolute;
			z-index: 200;
			background: white;

			opacity: 0;
			transition: opacity 0.2s, height 0.2s;
			top: 0.35rem;
			pointer-events: none;

			&[data-open] {
				opacity: 1;
				pointer-events: all;
			}
			&[data-direction='top'] {
				top: auto;
				bottom: 1.8rem;
			}
			.item {
				height: 2.3rem;
				font-size: 0.8rem;
				padding: 0.4rem 0.6rem;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				&:hover {
					color: #73b349;
					font-weight: 800;
					cursor: pointer;
				}
			}
		}
	}
</style>
