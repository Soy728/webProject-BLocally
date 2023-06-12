<script lang="ts">
	import _ from 'lodash';
	import { ProductItem } from '@src/components-route/product-item';
	import { CategorySwitch, type CategorySwitchItem } from '@src/components-route/category-switch';
	import { Dropdown, type DropdownItem } from '@src/components/dropdown';
	import { Layout } from '@src/components/layout';
	import { Banner } from '@src/components-route/banner';
	import type { ItemInfo } from '@src/components-route/product-item';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let selectedId: string = $page.params.category;
	let items: CategorySwitchItem[] = [
		{ id: '100', text: '전체', link: '/product/category/100' },
		{ id: '0', text: '과일', link: '/product/category/0' },
		{ id: '1', text: '채소', link: '/product/category/1' },
		{ id: '2', text: '쌀/잡곡', link: '/product/category/2' },
		{ id: '3', text: '수산물', link: '/product/category/3' },
		{ id: '4', text: '축산물', link: '/product/category/4' },
		{ id: '5', text: '기타', link: '/product/category/5' }
	];

	let dropdownItems: DropdownItem[] = [
		{ id: 'recommand', text: '추천순' }, 
		{ id: 'review', text: '리뷰많은순' }, 
		{ id: 'sold', text: '판매순' }, 
		{ id: 'newest', text: '신상품순' }, 
		{ id: 'cheapest', text: '낮은 가격순' } 
	];

	let productList: ItemInfo[] = [];
	function getItemList() {

		let url = 'http://121.137.55.132:8081/item/list';
		fetch(url, {
			method: 'GET',
			mode: 'cors' //중요!!!
		})
			.then((res) => res.json())
			.then((response) => {
				productList = response;
				console.log(response);
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});

	}

	onMount(() => {
		getItemList();
	});

	$: _productListCateg =
		Number(selectedId) !== 100
			? _(productList)
					.filter((d) => d.category === Number(selectedId))
					.value()
			: productList;

	let dropdownSelected = dropdownItems[0].id;
	$: _productList =
		dropdownSelected === 'recommand'
			? _(_productListCateg)
					.orderBy((d) => d.rcmdCnt, ['desc'])
					.value()
			: dropdownSelected === 'review'
			? _(_productListCateg)
					.orderBy((d) => d.reviewCnt, ['desc'])
					.value()
			: dropdownSelected === 'newest'
			? _(_productListCateg)
					.orderBy((d) => d.endDate, ['desc'])
					.value()
			: dropdownSelected === 'cheapest'
			? _(_productListCateg)
					.orderBy((d) => d.price)
					.value()
			: _(_productListCateg)
					.orderBy((d) => d.soldCnt, ['desc'])
					.value();
</script>

<Banner />
<Layout>
	<div class="root">
		<div class="header">
			<div class="title">상품</div>
			<CategorySwitch {items} bind:selectedId />
			<div class="dropdown-container">
				<Dropdown items={dropdownItems} bind:selectedId={dropdownSelected} />
			</div>
		</div>
		{#if !_.isEmpty(_productList)}
			<div class="product-items">
				{#each _productList as item}
					<ProductItem {item} />
				{/each}
			</div>
		{:else}
			<div class="empty">{`브로콜리 마켓이 열심히 준비중이예요 : )`}</div>
		{/if}
	</div>
</Layout>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		height: 100%;

		.empty {
			width: 100%;
			height: 18rem;
			min-width: 75rem;
			padding: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			width: 100%;
			.title {
				font-size: 1.8rem;
				font-weight: 700;
				padding: 2.5rem 0;
			}
			.dropdown-container {
				display: flex;
				height: 4rem;
				width: 100%;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
			}
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
