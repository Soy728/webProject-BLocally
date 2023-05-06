<script lang="ts">
	import _ from 'lodash';
	import { ButtonBorderProps } from './index';
	import { css, attr, type CSSProperties } from '@src/util/style';

	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'sm';
	// export let color: string;
	export let disable: boolean = false;
	export let ghost: boolean = false;
	export let border: ButtonBorderProps = ButtonBorderProps.NONE;
	export let width: string | undefined = undefined;
	export let fit: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
	export let link: string | undefined = undefined;

	export let style: CSSProperties = {};
	let _style: CSSProperties;

	$: {
		_style = _.cloneDeep(style);
		_style.width = width;
		// _style.backgroundColor = color;
	}
</script>

{#if link}
	<a href={link}>
		<div
			class="button-container"
			data-button
			style={css(_style)}
			data-size={attr(size)}
			data-fit={attr(fit)}
			data-disable={attr(disable)}
			data-ghost={attr(ghost)}
			data-border={attr(border)}
		>
			{#if $$slots['left-icon']}
				<div data-left-icon class="left-icon-container">
					<slot name="left-icon" />
				</div>
			{/if}
			<div class="container" data-text>
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
		class="button-container"
		data-button
		style={css(_style)}
		data-size={attr(size)}
		data-fit={attr(fit)}
		data-disable={attr(disable)}
		data-ghost={attr(ghost)}
		data-border={attr(border)}
		on:click={() => onClick && onClick()}
	>
		{#if $$slots['left-icon']}
			<div data-left-icon class="left-icon-container">
				<slot name="left-icon" />
			</div>
		{/if}
		<div class="container" data-text>
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

		.container {
			&[data-fit-items] {
				flex: 1 0;
				text-align: center;
			}
		}
		.left-icon-container .right-icon-container {
			height: 100%;
		}

		&:hover {
			cursor: pointer;
		}

		&[data-size='xs'] {
			height: 1.3rem;
			font-size: 0.7rem;
		}
		&[data-size='sm'] {
			height: 1.6rem;
			font-size: 0.8rem;
		}
		&[data-size='md'] {
			height: 2rem;
			font-size: 1rem;
		}
		&[data-size='lg'] {
			height: 2.6rem;
			font-size: 1.2rem;
		}

		&[data-fit] {
			width: 100%;
		}
		&[data-disable] {
			opacity: 40%;
			pointer-events: none !important;
		}

		&[data-ghost] {
			background-color: transparent !important;
			opacity: 0.7;
			transition: opacity 0.2s;
			&:hover {
				//border있고 ghost인 경우, border 변화
				// border-color: var(--component-base05);
				opacity: 1;
			}
			// &[data-border='none'] {
			// 	&:hover {
			// 		//border없고 ghost인 경우(text만 있는 경우), text만 변화
			// 		color: var(--component-base05);
			// 	}
			// }
		}

		&[data-border='none'] {
			border: none;
		}
		&[data-border='soft'] {
			border: 1px solid var(--hq-base-0400) !important;
		}
		&[data-border='normal'] {
			border: 1px solid var(--overlay-2x);
		}
		&[data-border='hard'] {
			border: 1px solid var(--overlay-4x);
		}
	}
</style>
