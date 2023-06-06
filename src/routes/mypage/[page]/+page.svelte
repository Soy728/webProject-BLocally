<script lang="ts">
	import _ from 'lodash';
	import { Layout } from '@src/components/layout';
	import { page } from '$app/stores';
	import { userInfo } from '@src/util/info/user/store';

	let param: string = $page.params.page;
	//main, order
	$: console.log($userInfo);
</script>

<Layout>
	<div class="root">
		<div class="header">
			<div class="user" data-main>
				{$userInfo.name} 님
			</div>
			<div class="detail">
				<div class="user-info">
					<div class="title">브로컬리 위치</div>
					<div class="value">
						{$userInfo.addr}
					</div>
				</div>

				<div class="user-info">
					<div class="title">주문/배송</div>
					<div class="value">-</div>
				</div>

				<div class="user-info">
					<div class="title">포인트</div>
					<div class="value">-</div>
				</div>

				<div class="user-info">
					<div class="title">쿠폰</div>
					<div class="value">-</div>
				</div>
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
		width: 100%;
		padding: 3rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 2rem;
		.user {
			width: 100%;
			height: 5rem;
			font-size: 1.8rem;
			color: #6ba543;
			font-weight: 800;
		}
		.detail {
			display: flex;
			width: 100%;
			gap: 10rem;
			.user-info {
				width: 20rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				gap: 2rem;

				white-space: nowrap;
				.title {
					font-size: 1.3rem;
					font-weight: 800;
				}
			}
		}
	}
</style>
