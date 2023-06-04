<script lang="ts">
	import type { ItemInfo } from './index';
	import { Image } from '@src/components/image';
	import { ComponentSizeProps } from '@src/util/size';
	import { formatPrice } from '@src/util/format';
	import { Icon, IconPropType } from '@src/components/icon';
	import { mdiHeartOutline } from '@mdi/js';

	export let item: ItemInfo;
	export let detail: boolean = false;
</script>

<a href={`/product/${item.id}`}>
	<div class="root">
		<div class="image-field">
			<div class="image">
				<Image src={item.img} cover defaultSize={ComponentSizeProps.XL} />
			</div>
			{#if item.rcmdCnt > 60}
				<div class="tag">브로컬리 추천</div>
			{/if}

			<div class="btn-container">
				<Icon icon={{ type: IconPropType.PATH, src: mdiHeartOutline }} color="white" />
			</div>
		</div>
		<div class="info-field">
			{#if item.dlvrPossible === 1}
				<div class="dlvr-possible">정기배송</div>
			{/if}
			<div class="item-name">
				{item.name}
			</div>
			<div class="contents">
				<div class="price">
					{formatPrice(item.price)}
					<div class="tag">원</div>
				</div>
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
	}

	.root {
		width: 24rem;
		height: 33rem;
		cursor: pointer;
		&:hover {
			.image-field {
				.image {
					transform: scale(1.05);
				}
				.btn-container {
					opacity: 1;
					transition: opacity 0.3s ease-out;
				}
			}
		}

		.image-field {
			height: 24rem;
			position: relative;
			overflow: hidden;
			border-radius: 0.3rem 0.3rem 0rem 0rem;

			.image {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				transition: transform 0.3s ease-in-out;
			}
			.tag {
				position: absolute;
				right: 1rem;
				top: 1rem;
				width: fit-content;
				height: fit-content;
				padding: 0.2rem 0.5rem;
				border-radius: 0.2rem;
				font-size: 0.9rem;
				background-color: rgba(255, 150, 0, 0.9);
				color: white;
			}

			.btn-container {
				opacity: 0;
				position: absolute;
				bottom: 0rem;
				right: 0;
				width: fit-content;
				height: fit-content;
				padding: 1rem;
			}
		}
		.dlvr-possible {
			width: fit-content;
			font-size: 0.9rem;
			padding: 0.2rem 0.5rem;
			background-color: #6ba543;
			border-radius: 0.2rem;
			font-weight: 800;
			color: white;
		}

		.info-field {
			display: flex;
			flex-direction: column;
			gap: 0.7rem;
			padding: 0.5rem 0.2rem;
			.item-name {
				font-weight: bolder;
				font-size: 1.08rem;
			}

			.contents {
				display: flex;
				gap: 0.5rem;
				.price {
					font-size: 1.15rem;
					display: flex;
					align-items: center;
					gap: 0.2rem;
					font-weight: bolder;
					.tag {
						font-size: 0.9rem;
						font-weight: 400;
					}
				}
			}
		}
	}
</style>
