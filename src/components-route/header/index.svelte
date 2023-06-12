<script lang="ts">
	import { Button } from '@src/components/button';
	import { Search } from '@src/components/search';
	import { ComponentSizeProps } from '@src/util/size';
	import { Category } from '.';
	import { userInfo } from '@src/util/info/user/store';
	import { Palette } from '@src/util/palette';
	import { Modal } from '@src/components/modal';
	import { LocationModal } from '@src/components-route/location-modal';

	let size: ComponentSizeProps = ComponentSizeProps.SM;
	let enable = false;
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
			<div class="logo" style="background-image:url(/logo/basic_0.5x.png)" />
		</a>
		<div class="search-container">
			<Search />
		</div>
		{#if userId !== -1}
			<Button
				color={Palette.Color.ACCENT}
				onClick={() => {
					enable = true;
				}}>로컬리</Button
			>
		{/if}
	</div>

	<Category />
</div>
<Modal bind:active={enable}>
	<div class="modal">
		<div class="title">로컬농장 위치</div>
		<LocationModal />
	</div>
</Modal>

<style lang="scss">
	.modal {
		display: flex;
		width: 100%;
		height: 100%;
		background-color: rgb(255, 255, 255);
		border-radius: 0.3rem;
		flex-direction: column;

		.title {
			padding: 0.5rem 1rem;
			font-weight: 800;
			font-size: 1.1rem;
			background-color: #6ba543;
			color: white;
		}
	}
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
			grid-template-columns: 15rem 40rem 3rem;
			gap: 1.8rem;
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
