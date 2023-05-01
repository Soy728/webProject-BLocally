<script lang="ts">
	import { Button } from '@src/components/button';
	import { Search } from '@src/components/search';
</script>

<div class="root">
	<div class="menu-container">
		<div class="base-menu">
			<Button>마이페이지</Button>
			<Button>dummy</Button>
		</div>
		<div class="user-menu">
			<Button>로그인</Button>
			<Button>회원가입</Button>
			<Button>주문/배송조회</Button>
			<Button>장바구니</Button>
		</div>
	</div>

	<div class="search-container">
		<Search />
	</div>
</div>

<style lang="scss">
	.root {
		width: 100%;
		height: 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;

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
