<script lang="ts">
	import _ from 'lodash';
	import { Layout } from '@src/components/layout';
	import { onMount } from 'svelte';
	import type { SellerInfo } from '@src/components-route/seller-item';
	import { page } from '$app/stores';
	import { sellerListSample } from '..';
	import { Image } from '@src/components/image';
	import { ComponentSizeProps } from '@src/util/size';
	import { ProductItem } from '@src/components-route/product-item';
	import { productListSample } from '@src/routes/product/category';

	let sellerId = $page.params.sellerId;
	let seller: SellerInfo;
	//sellerId or username
	function getItemList() {
		//TODO: API test
		// let url = 'http://121.137.55.132:8081/item/list/{sellerId} ';
		// fetch(url, {
		// 	method: 'GET',
		// 	mode: 'cors' //중요!!!
		// })
		// 	.then((res) => res.json())
		// 	.then((response) => {
		// 		sellerList = response;
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		alert('에러: ' + error.message);
		// 	});
		seller = _(sellerListSample)
			.filter((d) => String(d.id) === sellerId)
			.value()[0];
	}
	$: category = ['과일', '채소', '쌀/잡곡'];
	onMount(() => {
		sellerId && getItemList();
	});
</script>

<Layout>
	{#if seller}
		<div class="root">
			<div class="seller-profile">
				<div class="image-field">
					<div class="image">
						<Image src={seller.profileImg} cover defaultSize={ComponentSizeProps.XL} />
					</div>
				</div>

				<div class="info">
					<div class="farm-name">
						{seller.farmName}
					</div>
					<div class="detail">
						<div class="unit">
							농장주
							<div class="value">{seller.name}</div>
						</div>

						<div class="unit">
							농장위치
							<div class="value">{seller.addr}</div>
						</div>

						<div class="unit">
							연락처
							<div class="value">{seller.mobile}</div>
						</div>

						<div class="story">
							{seller.story}
						</div>

						<div class="tag-unit">
							{#each category as c}
								<div class="tag">
									# {c}
								</div>
							{/each}
						</div>
						<div class="command">
							<div class="recommend">추천수{seller.recommend}</div>
							<div class="revNum">리뷰수{seller.revNum}</div>
							<div class="score">평점{seller.score}</div>
						</div>
					</div>
				</div>
			</div>

			<div class="product-container">
				<div class="title">{seller.farmName} 상품</div>
				<div class="product">
					{#each productListSample.slice(0, 6) as item}
						<ProductItem {item} />
					{/each}
				</div>
			</div>
		</div>
	{/if}
</Layout>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 5rem 2rem;
		gap: 5rem;
		.seller-profile {
			display: grid;
			grid-template-columns: 43rem auto;
			width: 100%;
			height: 100%;

			.image-field {
				width: 43rem;
				height: 30rem;
				position: relative;

				.image {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				padding: 0rem 3rem;
				gap: 3rem;
				min-width: 35rem;
				.detail {
					display: flex;
					flex-direction: column;
					padding: 0rem 0.5rem;
					gap: 1.5rem;
				}

				.farm-name {
					font-size: 1.8rem;
					font-weight: 800;
					border-bottom: 2px solid rgb(75, 75, 75);
					// width: fit-content;
					padding: 0.5rem 0rem;
				}

				.unit {
					width: 100%;
					display: grid;
					grid-template-columns: 1fr auto;

					.value {
						font-weight: bolder;
					}
				}

				.story {
					padding: 1.5rem;
					background-color: rgba(239, 239, 239, 0.463);
					border-radius: 0.3rem;
					width: 100%;
				}

				.tag-unit {
					display: flex;
					gap: 0.5rem;
					font-size: 0.8rem;

					.tag {
						display: flex;
						align-items: center;
						justify-content: center;
						min-width: 4rem;
						padding: 0.45rem 1rem;
						// background-color: rgba(239, 239, 239, 0.463);
						border-radius: 1rem;
						color: #6ba543;
						border: 1px solid #6ba543;
					}
				}
				.command {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					font-size: 0.9rem;
					gap: 1rem;
				}
			}
		}
		.product-container {
			width: 100%;
			padding-top: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.title {
				font-size: 1.8rem;
				font-weight: 700;
				padding: 2.5rem 0;
				display: flex;
			}
			.product {
				padding-top: 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1.8rem;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
	}
</style>
