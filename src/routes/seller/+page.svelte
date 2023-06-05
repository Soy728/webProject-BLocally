<script lang="ts">
	import _ from 'lodash';
	import { SellerItem } from '@src/components-route/seller-item';
	import { Layout } from '@src/components/layout';
	import { Banner } from '@src/components-route/banner';
	import { Dropdown, type DropdownItem } from '@src/components/dropdown';
	import { onMount } from 'svelte';
	import type { SellerInfo } from '@src/components-route/seller-item';
	import { sellerListSample } from '.';

	let dropdownItems: DropdownItem[] = [
		{ id: 'best', text: '베스트순' }, //score:  리뷰 평균?,
		{ id: 'recommand', text: '추천순' }, //추천수,
		{ id: 'review', text: '리뷰 많은 순' } //리뷰수
	];

	let dropdownSelected = dropdownItems[0].id;
	let sellerList: SellerInfo[] = [];
	function getItemList() {
		//TODO: API test
		let url = 'http://121.137.55.132:8081/seller/list';
		fetch(url, {
			method: 'GET',
			mode: 'cors' //중요!!!
		})
			.then((res) => res.json())
			.then((response) => {
				sellerList = response;
				console.log(response);
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
	}

	onMount(() => {
		getItemList();
	});

	$: bestSeller = _(sellerList)
		.orderBy((d) => d.score, ['desc'])
		.slice(0, 3)
		.value();

	$: _sellerList =
		dropdownSelected === 'best'
			? _(sellerList)
					.orderBy((d) => d.score, ['desc'])
					.value()
			: dropdownSelected === 'recommand'
			? _(sellerList)
					.orderBy((d) => d.recommend, ['desc'])
					.value()
			: _(sellerList)
					.orderBy((d) => d.revNum, ['desc'])
					.value();
</script>

<Banner />
<Layout>
	<div class="root">
		<div class="group">
			<div class="header">
				<div class="title">월간 명예의 농장</div>
			</div>
			<div class="seller-items">
				{#each bestSeller as seller}
					<SellerItem {seller} detail best />
				{/each}
			</div>
		</div>
		<div class="group">
			<div class="header">
				<div class="title">로컬농장</div>

				<div class="dropdown-container">
					<Dropdown items={dropdownItems} bind:selectedId={dropdownSelected} />
				</div>
			</div>
			<div class="seller-items">
				{#each _sellerList as seller}
					<SellerItem {seller} detail />
				{/each}
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
	.root {
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

		.seller-items {
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
