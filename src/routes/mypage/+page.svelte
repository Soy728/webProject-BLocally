<script lang="ts">
	import _ from 'lodash';
	import { Layout } from '@src/components/layout';
	import { userInfo } from '@src/util/info/user/store';
	import { onMount } from 'svelte';
	import type { UserInfo, OrderInfo } from '.';
	import { OrderItem } from '@src/components-route/order-item';

	$: userId = $userInfo;
	let user: UserInfo;
	let order: OrderInfo[];

	function getUserInfo() {
		let url = `http://121.137.55.132:8081/user/${userId}`;
		const res = fetch(url, {
			method: 'GET',
			mode: 'cors' //중요!!!
		})
			.then((res) => res.json())
			.then((response) => {
				return response;
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
		return res;
	}

	function getOrderInfo() {
		let url = `http://121.137.55.132:8081/order/list/${userId}`;
		const res = fetch(url, {
			method: 'GET',
			mode: 'cors' //중요!!!
		})
			.then((res) => res.json())
			.then((response) => {
				return response;
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
		return res;
	}

	onMount(async () => {
		user = await getUserInfo();
		order = await getOrderInfo();
	});
</script>

<Layout>
	{#if user && order}
		<div class="root">
			<div class="header">
				<div class="user" data-main>
					{user.name} 님
				</div>
				<div class="detail">
					<div class="user-info">
						<div class="title">브로컬리 위치</div>
						<div class="value">
							{user.addr}
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
				<div class="line" data-accent />
				<div class="order">
					<div class="title">주문 내역</div>
					{#if !_.isEmpty(order)}
						<div class="order-group">
							{#each order as orderInfo, i}
								<OrderItem {orderInfo} />
								{#if i < order.length - 1}
									<div class="line" />
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
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
		padding: 4rem 6rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 1rem;

		.order {
			padding-top: 3rem;
			width: 100%;

			.title {
				font-size: 1.3rem;
				font-weight: 800;
				padding-bottom: 1rem;
			}
			.order-group {
				display: flex;
				flex-direction: column;

				gap: 1rem;
			}
		}
		.line {
			width: 100%;
			height: 1px;
			background-color: rgba(187, 187, 187, 0.456);
		}
		.user {
			width: 100%;
			height: 5rem;
			font-size: 1.8rem;
			color: #6ba543;
			font-weight: 800;
			display: flex;
			justify-content: center;
		}
		.detail {
			display: flex;
			width: 100%;
			padding: 1rem;

			.user-info {
				width: 20rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
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
