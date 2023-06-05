<script lang="ts">
	import type { SellerInfo } from './index';
	import { Image } from '@src/components/image';
	import { ComponentSizeProps } from '@src/util/size';
	import { mdiHeart, mdiThumbUp } from '@mdi/js';
	import { Icon, IconPropType } from '@src/components/icon';

	export let seller: SellerInfo;
	export let detail: boolean = false;
	export let best: boolean = false;
</script>

<a href={`/seller/${seller.username}`}>
	<div class="root">
		<div class="image-field">
			<div class="image">
				<Image src={seller.profileImg} cover defaultSize={ComponentSizeProps.XL} />
			</div>

			{#if best}
				<div class="tag">명예 생산자</div>
			{/if}
		</div>
		<div class="info-field">
			<div class="title">
				<div class="farm-name">
					{seller.farmName}
				</div>
				<div class="region">
					{seller.region}
				</div>
			</div>
			<div class="contents">
				<div class="story-container">
					<div class="story">
						{seller.story}
					</div>
					{#if detail}
						<div class="review">
							<div class="rev">
								<Icon
									icon={{ type: IconPropType.PATH, src: mdiHeart, scale: 0.45 }}
									style={{ marginRight: '-0.25rem' }}
									color={`red`}
								/>
								추천
								{seller.recommend}
							</div>
							<div class="rev">
								<Icon
									icon={{ type: IconPropType.PATH, src: mdiThumbUp, scale: 0.45 }}
									style={{ marginRight: '-0.25rem' }}
									color={`black`}
								/>
								평점
								{seller.score}
							</div>
							<div class="rev">
								<Icon
									icon={{ type: IconPropType.PATH, src: mdiThumbUp, scale: 0.45 }}
									style={{ marginRight: '-0.25rem' }}
									color={`black`}
								/>
								리뷰수
								{seller.revNum}
							</div>
						</div>
					{/if}
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
			.farm-name {
				color: #6ba543;
				border-bottom: 2px solid #6ba543 !important;
			}

			.image-field {
				.image {
					transform: scale(1.08);
				}
			}
		}
		.image-field {
			height: 16rem;
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
				background-color: rgba(50, 171, 178, 0.9);
				color: white;
			}
		}
		.info-field {
			padding: 1rem 0rem;
			display: flex;
			flex-direction: column;
			.title {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.farm-name {
					width: fit-content;
					font-size: 1.2rem;
					font-weight: 800;
					border-bottom: 2px solid transparent;
				}
				.region {
					font-size: 0.9rem;
					padding: 0.2rem 0.5rem;
					background-color: #6ba543;
					border-radius: 0.2rem;
					font-weight: 800;
					color: white;
				}
			}

			.contents {
				padding-top: 1.3rem;
			}
			.story-container {
				//border-top: 1px solid rgb(168, 168, 168);

				.story {
					font-size: 0.9rem;
					line-height: 1.4rem;
					overflow: hidden;
					text-overflow: ellipsis;

					background-color: rgba(241, 241, 241, 0.4);
					padding: 1.2rem 0.8rem;
					height: 8rem;
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			}

			.review {
				padding: 0.5rem;
				flex-direction: row;
				display: flex;
				justify-content: flex-end;
				gap: 0.5rem;
				font-size: 0.8rem;
				color: rgb(75, 75, 75);

				.rev {
					display: flex;
					align-items: center;

					font-weight: 700;
				}
			}
		}
	}
</style>
