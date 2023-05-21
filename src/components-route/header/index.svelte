<script lang="ts">
	import { Button } from '@src/components/button';
	import { Search } from '@src/components/search';
	import { Category } from '.';
</script>

<div class="root">
	<div class="menu-container">
		<div class="base-menu">
			<Button noAction ghost>마이페이지</Button>
		</div>
		<div class="user-menu">
			<Button ghost noAction link={'/login'}>로그인</Button>
			<Button ghost noAction link={'/join'}>회원가입</Button>
			<Button ghost noAction>주문/배송조회</Button>
			<Button ghost noAction>장바구니</Button>
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
		height: 13rem;
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
			display: flex;
			justify-content: center;
		}
	}
</style>
