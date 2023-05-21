<script lang="ts">
	import _ from 'lodash';

	import { css, attr, type CSSProperties } from '@src/util/style';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';

	export let size: ComponentSizeProps = ComponentSizeProps.MD;
	export let color: Palette.Color = Palette.Color.PRIMARY;
	export let disable: boolean = false;
	export let ghost: boolean = false;
	export let border: boolean = false;

	export let width: string | undefined = undefined;
	export let fit: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
	export let link: string | undefined = undefined;
	export let noAction: boolean = false;

	export let style: CSSProperties = {};
	export let fontStyle: CSSProperties = {};
	let status: Palette.Action = Palette.Action.BASE;
	let _style: CSSProperties;
	let _fontStyle: CSSProperties = _.cloneDeep(fontStyle);

	$: {
		_style = _.cloneDeep(style);
		_style.width = width;
		_style.backgroundColor = color;
	}

	$: !noAction && (_fontStyle.color = Palette.ColorUnit[color][status].color);
	$: !noAction && (_style.background = Palette.ColorUnit[color][status].backgroundColor);
	$: !noAction &&
		border &&
		(_style.border = `1px solid ${Palette.ColorUnit[color][status].borderColor}`);
	$: ghost && (_fontStyle.color = 'black');
</script>

{#if link}
	<a href={link}>
		<div
			on:mouseenter={() => (status = Palette.Action.HOVER)}
			on:mouseleave={() => (status = Palette.Action.BASE)}
			on:mousedown={() => (status = Palette.Action.ACTIVE)}
			on:mouseup={() => (status = Palette.Action.HOVER)}
			class="button-container"
			data-button
			style={css(_style)}
			data-size={attr(size)}
			data-fit={attr(fit)}
			data-disable={attr(disable)}
			data-ghost={attr(ghost)}
		>
			{#if $$slots['left-icon']}
				<div data-left-icon class="left-icon-container">
					<slot name="left-icon" />
				</div>
			{/if}
			<div class="container" style={css(_fontStyle)} data-text>
				<slot />
			</div>
			{#if $$slots['right-icon']}
				<div data-right-icon class="right-icon-container">
					<slot name="right-icon" />
				</div>
			{/if}
		</div>
	</a>
{:else}
	<div
		on:mouseenter={() => (status = Palette.Action.HOVER)}
		on:mouseleave={() => (status = Palette.Action.BASE)}
		on:mousedown={() => (status = Palette.Action.ACTIVE)}
		on:mouseup={() => (status = Palette.Action.HOVER)}
		class="button-container"
		data-button
		style={css(_style)}
		data-size={attr(size)}
		data-fit={attr(fit)}
		data-disable={attr(disable)}
		data-ghost={attr(ghost)}
		on:click={() => onClick && onClick()}
	>
		{#if $$slots['left-icon']}
			<div data-left-icon class="left-icon-container">
				<slot name="left-icon" />
			</div>
		{/if}
		<div class="container" data-text style={css(_fontStyle)}>
			<slot />
		</div>
		{#if $$slots['right-icon']}
			<div data-right-icon class="right-icon-container">
				<slot name="right-icon" />
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
	}
	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0rem 1rem;
		width: fit-content;
		border-radius: 0.2rem;
		font-weight: 400;

		.left-icon-container .right-icon-container {
			height: 100%;
		}

		&:hover {
			cursor: pointer;
		}

		&[data-size='xs'] {
			height: $component-height-xs;
			font-size: $component-font-size-xs;
		}
		&[data-size='sm'] {
			height: $component-height-sm;
			font-size: $component-font-size-xs;
		}
		&[data-size='md'] {
			height: $component-height-md;
			font-size: $component-font-size-sm;
		}
		&[data-size='lg'] {
			height: $component-height-lg;
			font-size: $component-font-size-md;
		}

		&[data-size='xl'] {
			height: $component-height-xl;
			font-size: $component-font-size-xl;
		}

		&[data-fit] {
			width: 100%;

			text-align: center;
		}
		&[data-disable] {
			opacity: 40%;
			pointer-events: none !important;
		}

		&[data-ghost] {
			background-color: transparent !important;
			opacity: 0.8;
			transition: opacity 0.2s;

			&:hover {
				//border있고 ghost인 경우, border 변화
				// border-color: var(--component-base05);
				opacity: 1;
				font-weight: 500;
			}
			// &[data-border='none'] {
			// 	&:hover {
			// 		//border없고 ghost인 경우(text만 있는 경우), text만 변화
			// 		color: var(--component-base05);
			// 	}
			// }
		}
		border: none;
	}
</style>
