<script lang="ts">
	import { Button } from '@src/components/button';
	import { Search } from '@src/components/search';
	import { ComponentSizeProps } from '@src/util/size';
	import { Category } from '.';

	let size: ComponentSizeProps = ComponentSizeProps.SM;
</script>

<div class="root">
	<div class="menu-container">
		<div class="base-menu">
			<Button {size} noAction ghost>마이페이지</Button>
		</div>
		<div class="user-menu">
			<Button {size} ghost noAction link={'/login'}>로그인</Button>
			<Button {size} ghost noAction link={'/join'}>회원가입</Button>
			<Button {size} ghost noAction>주문/배송조회</Button>
			<Button {size} ghost noAction>장바구니</Button>
		</div>
	</div>

	<div class="search-container">
		<Search />
	</div>
	<Category />
</div>

<style lang="scss">
	.root {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		white-space: nowrap;

		.menu-container {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.user-menu,
			.base-menu {
				display: flex;
				height: fit-content;
				flex-direction: row;
			}
		}

		.search-container {
			width: 100%;
			padding: 1.5rem 0rem;
			display: flex;
			justify-content: center;
		}
	}
</style>
