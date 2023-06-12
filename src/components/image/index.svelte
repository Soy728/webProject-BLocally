<script lang="ts">
	import { type CSSProperties, attr, css } from '@src/util/style';
	import { mdiLoading } from '@mdi/js';
	import { Icon, IconPropType, IconSpinProps } from '@src/components/icon';
	import { ComponentSizeProps } from '@src/util/size';

	export let src: string | Promise<string> | undefined;
	export let style: CSSProperties = {};
	export let defaultSrc: string = '';
	export let defaultSize: ComponentSizeProps = ComponentSizeProps.SM;
	export let cover: boolean = false;

	let loading: boolean = true;
	let checkError = false;
	$: isPromise = typeof src === 'string';

	$: src && ((loading = true), (checkError = false));

	function onError(
		error: Event & {
			currentTarget: EventTarget & Element;
		}
	) {
		if (!checkError) {
			const target = error.currentTarget as HTMLImageElement;
			target.src = defaultSrc;
			checkError = true;
			loading = false;
		}
	}
</script>

<div class="root" data-image style={css(style)}>
	{#if typeof src === 'string'}
		<img
			{src}
			alt=""
			on:load={() => (loading = false)}
			on:error|stopPropagation|preventDefault={onError}
			style={css({
				objectFit: cover ? 'cover' : 'contain'
			})}
			loading="lazy"
			data-loading={attr(loading)}
		/>
	{:else}
		{#await src then src}
			<img
				{src}
				alt=""
				on:load={() => (loading = false)}
				on:error|stopPropagation|preventDefault={onError}
				style={css({
					objectFit: cover ? 'cover' : 'contain'
				})}
				loading="lazy"
				data-loading={attr(loading)}
			/>
		{:catch}
			<img
				src={defaultSrc}
				alt=""
				on:load={() => (loading = false)}
				on:error|stopPropagation|preventDefault={onError}
				style={css({
					objectFit: cover ? 'cover' : 'contain'
				})}
				loading="lazy"
				data-loading={attr(loading)}
			/>
		{/await}
	{/if}
	{#if loading}
		<div class="loader">
			<Icon
				icon={{ type: IconPropType.PATH, src: mdiLoading }}
				spin={IconSpinProps.CLOCKWISE}
				size={defaultSize}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	.root {
		position: relative;
		width: 100%;
		height: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: opacity 0.2s;
			opacity: 1;
		}
		img[data-loading='true'] {
			opacity: 0;
		}

		.loader {
			z-index: 1;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
