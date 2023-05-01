<script lang="ts">
	import _ from 'lodash';

	import { IconPropType, type IconProp, IconFlipProps, IconSpinProps } from '.';
	import { PathIcon } from '@src/components/icon/path';
	import { SVGIcon } from '@src/components/icon/svg';
	import { Size } from '@src/util/size';
	import { css, type CSSProperties } from '@src/util/style';

	export let size = Size.Number.md;
	export let flip: IconFlipProps | undefined | true = undefined;
	export let rotate: number = 0;
	export let spin: IconSpinProps | undefined = undefined;
	export let backgroundColor: string | undefined = undefined;
	export let borderRadius: string | undefined = undefined;
	export let margin: string | undefined = undefined;
	export let color: string = 'gray';

	export let styleContainer: CSSProperties = {};
	export let style: CSSProperties = {};
	export let icon: IconProp;

	let _style = _.cloneDeep(style);
	let _icon: IconProp = _.cloneDeep(icon);

	$: {
		_style = _.cloneDeep(style);
		_icon = _.cloneDeep(icon);
	}
</script>

<div
	class="icon-container"
	style={css(
		{
			backgroundColor,
			borderRadius,
			margin,
			transform: icon.scale ? `scale(${icon.scale})` : undefined
		},
		styleContainer
	)}
>
	{#if icon.type === IconPropType.SVG}
		<SVGIcon svg={_icon.src} {size} {color} {flip} {rotate} {spin} style={_style} />
	{:else if icon.type === IconPropType.PATH}
		<PathIcon path={_icon.src} {size} {color} {flip} {rotate} {spin} style={_style} />{/if}
</div>

<style lang="scss">
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		height: fit-content;
		overflow: hidden;
		//Icon 크기 조정
		transform: scale(0.8);
	}
</style>
