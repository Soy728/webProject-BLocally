<script lang="ts">
	import _, { slice } from 'lodash';
	import { Layout } from '@src/components/layout';
	import { Banner } from '@src/components-route/banner';
	import type { SellerInfo } from '@src/components-route/seller-item';
	import { sellerListSample } from '@src/routes/seller';
	import { productListSample } from '@src/routes/product/category';
	import { onMount } from 'svelte';
	import { SellerItem } from '@src/components-route/seller-item';
	import { Button } from '@src/components/button';
	import { ProductItem } from '@src/components-route/product-item';
	import { mdiChevronRight } from '@mdi/js';
	import { IconPropType, Icon } from '@src/components/icon';

	let sellerList: SellerInfo[] = [];
	function getItemList() {
		//TODO: API test
		// let url = 'http://121.137.55.132:8081/item/list';
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
		sellerList = sellerListSample;
	}

	onMount(() => {
		getItemList();
	});

	$: bestSeller = _(sellerList)
		.orderBy((d) => d.score, ['desc'])
		.slice(0, 3)
		.value();
	$: regular_delivery = _(productListSample)
		.filter((d) => d.dlvrPossible === 1)
		.value();
</script>

<Banner />
<Layout>
	<div class="root">
		<div class="group">
			<div class="header">
				<a href={`/seller`}>
					<div class="title">
						월간 명예의 농장
						<Icon icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 1.23 }} />
					</div>
				</a>
			</div>
			<div class="items">
				{#each bestSeller as seller}
					<SellerItem {seller} best />
				{/each}
			</div>
		</div>

		<div class="group">
			<div class="header">
				<a href={`/product/category/100`}>
					<div class="title">
						상품
						<Icon icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 1.23 }} />
					</div>
				</a>
			</div>
			<div class="items">
				{#each productListSample.slice(0, 6) as item}
					<ProductItem {item} />
				{/each}
			</div>
		</div>

		<div class="group">
			<div class="header">
				<a href={`/regular-delivery`}>
					<div class="title">
						정기배송
						<Icon icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 1.23 }} />
					</div>
				</a>
			</div>
			<div class="items">
				{#each regular_delivery.slice(0, 3) as item}
					<ProductItem {item} />
				{/each}
			</div>
		</div>

		<div class="group">
			<div class="header">
				<a href={`/event`}>
					<div class="title">
						이벤트
						<Icon icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 1.23 }} />
					</div>
				</a>
			</div>
			<div class="items">
				<!-- {#each bestSeller as seller}
					<SellerItem {seller} />
				{/each} -->
			</div>
		</div>

		<div class="group">
			<div class="header">
				<a href={`/farm`}>
					<div class="title">
						농장체험
						<Icon icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 1.23 }} />
					</div>
				</a>
			</div>
			<div class="items">
				<!-- {#each bestSeller as seller}
					<SellerItem {seller} />
				{/each} -->
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
	.root {
		a {
			color: inherit;
			text-decoration: none;
		}
		display: flex;
		flex-direction: column;
		gap: 6rem;
		align-items: center;
		justify-content: center;
		height: 100%;
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0rem;
			width: 100%;
			.title {
				font-size: 1.8rem;
				font-weight: 700;
				padding: 2.5rem 0;
				display: flex;
			}
		}

		.items {
			padding-top: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1.8rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
