<script lang="ts">
	import _ from 'lodash';
	import { Layout } from '@src/components/layout';
	import { Banner } from '@src/components-route/banner';
	import { Dropdown } from '@src/components/dropdown';
	import type { DropdownItem } from '@src/components/dropdown';
	import type { ItemInfo } from '@src/components-route/product-item';
	import { onMount } from 'svelte';
	import { ProductItem } from '@src/components-route/product-item';

	let dropdownItems: DropdownItem[] = [
		{ id: 'recommand', text: '추천순' },
		{ id: 'review', text: '리뷰많은순' },
		{ id: 'sold', text: '판매순' },
		{ id: 'newest', text: '신상품순' },
		{ id: 'cheapest', text: '낮은 가격순' }
	];

	let productList: ItemInfo[] = [];
	let dropdownSelected = dropdownItems[0].id;
	function getItemList() {
		let url = 'http://121.137.55.132:8081/item/list';
		fetch(url, {
			method: 'GET',
			mode: 'cors'
		})
			.then((res) => res.json())
			.then((response) => {
				productList = response;
				productList = _(productList)
					.filter((d) => d.dlvrPossible == 1)
					.value();
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
	}
	onMount(() => {
		getItemList();
	});

	$: _productList =
		dropdownSelected === 'recommand'
			? _(productList)
					.orderBy((d) => d.rcmdCnt, ['desc'])
					.value()
			: dropdownSelected === 'review'
			? _(productList)
					.orderBy((d) => d.reviewCnt, ['desc'])
					.value()
			: dropdownSelected === 'newest'
			? _(productList)
					.orderBy((d) => d.endDate, ['desc'])
					.value()
			: dropdownSelected === 'cheapest'
			? _(productList)
					.orderBy((d) => d.price)
					.value()
			: _(productList)
					.orderBy((d) => d.soldCnt, ['desc'])
					.value();
</script>

<Banner />
<Layout>
	<div class="root">
		<div class="header">
			<div class="title">정기배송</div>
			<div class="dropdown-container">
				<Dropdown items={dropdownItems} bind:selectedId={dropdownSelected} />
			</div>
		</div>

		<div class="product-items">
			{#each _productList as item}
				<ProductItem {item} />
			{:else}
				<div class="empty" />
			{/each}
		</div>
	</div>
</Layout>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			.title {
				font-size: 1.8rem;
				font-weight: 700;
				padding: 2.5rem 0;
			}
			.dropdown-container {
				display: flex;
				height: 3rem;
				width: 100%;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
			}
		}
		.empty {
			width: 100%;
			height: 100%;
			min-width: 70rem;
		}
		.product-items {
			padding-top: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1.8rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
