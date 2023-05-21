<script lang="ts">
	import _ from 'lodash';
	import { ComponentSizeProps } from '@src/util/size';
	import type { CSSProperties } from '@src/util/style';
	import { getStyleStringUnit, attr, css } from '@src/util/style';
	import { createEventDispatcher } from 'svelte';
	import { Palette } from '@src/util/palette';

	export let size: ComponentSizeProps = ComponentSizeProps.MD;
	export let border: boolean = false;
	export let fit: boolean = false;
	export let width: number | string | undefined = undefined;
	export let color: Palette.Color = Palette.Color.SECONDARY;
	export let type: 'text' | 'password' = 'text';

	export let focus: boolean = false;
	export let error: boolean = false;
	export let errorColor: string = '#e33f3f';
	export let style: CSSProperties = {};

	export let value: string | undefined = undefined;
	export let placeholder: string | undefined = '';
	let eleRoot: HTMLInputElement;

	let _style: CSSProperties = _.cloneDeep(style);
	let status: Palette.Action = Palette.Action.BASE;

	const dispatch = createEventDispatcher<{
		changedebounce: string;
		change: string;
		submit: string;
		focus: void;
	}>();

	$: {
		_style.maxWidth = getStyleStringUnit(width);
		width && (_style.width = getStyleStringUnit(width));
	}

	$: {
		_style.border = border
			? `1.4px solid ${error ? errorColor : Palette.ColorUnit[color][status].borderColor}`
			: '1.4px solid transparent';
	}

	const debounce = _.debounce(() => dispatch('changedebounce', value), 200);

	$: status && border && (_style.borderColor = Palette.ColorUnit[color][status].borderColor);
	$: eleRoot && (eleRoot.type = type);
</script>

<div
	class="root"
	data-input
	data-size={attr(size)}
	data-isborder={attr(border)}
	data-fit={attr(fit)}
	data-error={attr(error)}
	style={css(_style)}
	on:keydown|capture|stopPropagation
>
	<input
		{placeholder}
		bind:this={eleRoot}
		bind:value
		on:focus={() => {
			focus = true;
			error ? status : (status = Palette.Action.ACTIVE);
			dispatch('focus');
		}}
		on:blur={() => (
			dispatch('submit', value), (focus = false), error ? status : (status = Palette.Action.BASE)
		)}
		on:keyup={(key) => {
			debounce();
			dispatch('change', value);
			key.code === 'Enter' && dispatch('submit', value);
		}}
	/>

	{#if $$slots['icon']}
		<div data-right-icon class="icon-container">
			<slot name="icon" />
		</div>
	{/if}
</div>

<style lang="scss">
	.root {
		display: flex;
		justify-content: start;
		align-items: center;
		width: 100%;
		min-width: 1rem;
		min-height: fit-content;
		overflow: hidden;
		border-radius: 0.3rem;
		cursor: text;
		font-weight: 400;
		padding: 0rem 0.4rem;

		&[data-size='xs'] {
			min-height: $component-height-xs;
			max-width: 10rem;
			font-size: $component-font-size-xs;
		}
		&[data-size='sm'] {
			min-height: $component-height-sm;
			max-width: 15rem;
			font-size: $component-font-size-xs;
		}
		&[data-size='md'] {
			min-height: $component-height-md;
			max-width: 20rem;
			font-size: $component-font-size-sm;
		}
		&[data-size='lg'] {
			min-height: $component-height-lg;
			max-width: 30rem;
			font-size: $component-font-size-md;
		}

		&[data-size='xl'] {
			min-height: $component-height-xl;
			max-width: 45rem;
			font-size: $component-font-size-lg;
		}

		//fit
		&[data-fit] {
			max-width: 100%;
		}

		input {
			background-color: transparent;
			border: none;
			outline: none;
			line-height: 1.5;

			font: inherit;
			color: inherit;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			text-indent: 0.4rem;

			&:active,
			&:focus {
				border: none;
				outline: none;
			}
			&::placeholder {
				color: inherit;
				opacity: 0.5;
				font: inherit;
			}
		}
	}
</style>
