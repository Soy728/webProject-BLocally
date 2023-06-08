<script lang="ts">
	import { Button } from '@src/components/button';
	import { Search } from '@src/components/search';
	import { ComponentSizeProps } from '@src/util/size';
	import { Category } from '.';
	import { userInfo } from '@src/util/info/user/store';

	let size: ComponentSizeProps = ComponentSizeProps.SM;
	$: userId = $userInfo;
</script>

<div class="root">
	<div class="menu-container">
		<div class="base-menu">
			{#if userId !== -1}
				<Button {size} noAction ghost link={'/mypage'}>마이페이지</Button>
			{/if}
		</div>
		<div class="user-menu">
			{#if userId === -1}
				<Button {size} ghost noAction link={'/login'}>로그인</Button>
				<Button {size} ghost noAction link={'/join'}>회원가입</Button>
			{:else}
				<Button
					{size}
					ghost
					noAction
					link={'/'}
					onClick={() => {
						userInfo.set(-1);
						alert('로그아웃 되었습니다.');
					}}
				>
					로그아웃
				</Button>
			{/if}

			<Button {size} ghost noAction link={'/mypage'}>주문/배송조회</Button>
			<Button {size} ghost noAction>장바구니</Button>
		</div>
	</div>
	<div class="contents">
		<a href="/">
			<div class="logo" style="background-image:url(/logo/renew_0.5x.png)" />
			<!-- <div class="logo" style="background-image:url(/logo/basic_0.5x.png)" /> -->
		</a>
		<div class="search-container">
			<Search />
		</div>
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
		.contents {
			width: 100%;
			height: 100%;
			padding: 1.5rem 0rem;
			display: grid;
			grid-template-columns: 15rem 40rem;
			gap: 2rem;
			justify-content: center;
			align-items: center;
			a {
				height: 100%;
				width: 100%;
				.logo {
					height: 100%;
					width: 100%;
					transform: scale(0.88);
					background-repeat: no-repeat;
					background-size: cover;
				}
			}
			.search-container {
				width: 100%;
				display: flex;
				justify-content: center;
			}
		}
	}
</style>
