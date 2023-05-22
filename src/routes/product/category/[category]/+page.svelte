<script lang="ts">
	import { ProductItem } from '@src/components-route/product-item';
	import { CategorySwitch, type CategorySwitchItem } from '@src/components-route/category-switch';
	import { Dropdown, type DropdownItem } from '@src/components/dropdown';
	let selectedId: string = 'all';
	let items: CategorySwitchItem[] = [
		{ id: 'all', text: '전체', link: '/product/category/all' },
		{ id: 'fruit', text: '과일', link: '/product/category/fruit' },
		{ id: 'vegetable', text: '채소', link: '/product/category/vegetable' },
		{ id: 'grain', text: '쌀/잡곡', link: '/product/category/grain' },
		{ id: 'fish', text: '수산물', link: '/product/category/fish' },
		{ id: 'meat', text: '축산물', link: '/product/category/meat' }
	];

	let dropdownItems: DropdownItem[] = [
		{ id: 'best', text: '베스트순' },
		{ id: 'newest', text: '신상품순' },
		{ id: 'name', text: '상품명순' },
		{ id: 'cheapest', text: '낮은 가격순' }
	];

	let dropdownSelected = dropdownItems[0].id;
</script>

<div class="root">
	<div class="best-seller-banner">BEST SELLER BANNER</div>
	<div class="category-switch-container">
		<CategorySwitch {items} bind:selectedId />
	</div>
	<div class="dropdown-container">
		<Dropdown items={dropdownItems} bind:selectedId={dropdownSelected} />
	</div>
	<div class="product-items">
		{#each Array(3) as _, idx}
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		height: 100%;
		.best-seller-banner {
			height: 25rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.dropdown-container {
			display: flex;
			height: 3rem;
			width: 100%;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
		}

		.product-items {
			padding-top: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
</style>
