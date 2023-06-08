<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Layout } from '@src/components/layout';
	import type { ItemInfo } from '.';
	import { Image } from '@src/components/image';
	import { ComponentSizeProps } from '@src/util/size';
	import { formatPrice } from '@src/util/format';
	import { Button } from '@src/components/button';
	import { Palette } from '@src/util/palette';
	import { userInfo } from '@src/util/info/user/store';
	import type { UserInfo } from '../../mypage/index';
	import { Calendar } from '@src/components/date';
	import { dateDH } from '@src/util/format';
	import moment from 'moment';

	let selectedId: string = $page.params.productId;
	let productInfo: ItemInfo;
	let count = 1;

	$: userId = $userInfo;
	$: startSelected = new Date();
	$: endSelected = moment(moment(new Date()).format('YYYY-MM-DD')).add(21, 'd').toDate();

	function getItemInfo() {
		let url = `http://121.137.55.132:8081/item/${selectedId}`;
		const res = fetch(url, {
			method: 'GET',
			mode: 'cors'
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

	function orderProduct(mobile: string, addr: string) {
		let url = `http://121.137.55.132:8081/order/insertOrder`;

		let data = {
			itemId: selectedId,
			userId: userId,
			mobile,
			addr
		};
		const res = fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((response) => {
				let message = response['data'];
				alert(message);
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});

		return res;
	}
	let user: UserInfo | undefined;
	onMount(async () => {
		productInfo = await getItemInfo();
		user = userId === -1 ? undefined : await getUserInfo();
	});

	let unique = {};
	function restart() {
		unique = {};
	}
</script>

<Layout>
	{#if productInfo}
		<div class="root">
			<div class="product-profile">
				<div class="image-field">
					<div class="image">
						<Image src={productInfo.img} cover defaultSize={ComponentSizeProps.XL} />
					</div>
				</div>

				<div class="info">
					<div class="header">
						<div class="product-name">
							{productInfo.name}
						</div>
						<div class="tag-unit">
							{#if productInfo.dlvrPossible === 1}
								<div class="dlvr-possible">정기배송</div>
							{/if}

							{#if productInfo.rcmdCnt > 60}
								<div class="tag">브로컬리 추천</div>
							{/if}
						</div>
						<div class="price">
							{formatPrice(productInfo.price)}
							<div class="tag">원</div>
						</div>
					</div>

					<div class="detail">
						<div class="count">
							직진배송
							<div class="value">가능</div>
						</div>
						<div class="count">
							판매단위
							<div class="value">1박스</div>
						</div>
						<div class="count">
							중량/용량
							<div class="value">300g</div>
						</div>
						<div class="count">
							배송
							<div class="value">일반배송</div>
						</div>
						<div class="count">
							수량
							<div class="value">
								<Button
									width="1.5rem"
									size={ComponentSizeProps.MD}
									onClick={() => {
										if (count <= 1) count = 1;
										else count -= 1;
									}}
									fontStyle={{ fontSize: '1.2rem' }}
									>-
								</Button>
								{count}
								<Button
									width="1.5rem"
									size={ComponentSizeProps.MD}
									fontStyle={{ fontSize: '1.2rem' }}
									onClick={() => {
										count += 1;
									}}>+</Button
								>
							</div>
						</div>
						<div class="amount">
							총 상품 금액
							<div class="value">
								{formatPrice(productInfo.price * count)}
								<div class="tag">원</div>
							</div>
						</div>
					</div>
					<div class="btn-container">
						<Button fit size={ComponentSizeProps.XL}>장바구니</Button>
						<Button
							onClick={() => {
								user ? orderProduct(user.mobile, user.addr) : undefined;
							}}
							color={Palette.Color.ACCENT}
							fit
							size={ComponentSizeProps.XL}>주문하기</Button
						>
					</div>
				</div>
			</div>
			{#if productInfo.dlvrPossible === 1}
				<div class="calendar">
					<div class="title">정기배송이 가능한 상품입니다</div>
					<div class="contents">
						<Calendar
							title="시작일"
							bind:selected={startSelected}
							start={new Date()}
							onClick={() => {
								restart();
							}}
						/>
						{#key unique}
							<Calendar title="마감일" bind:selected={endSelected} bind:start={startSelected} />
						{/key}
					</div>
					<div class="date-text">
						<div class="tag">
							<div>{dateDH(startSelected)}</div>
							<div>-</div>
							<div>{dateDH(endSelected)}</div>
						</div>
						<Button size={ComponentSizeProps.XL} color={Palette.Color.ACCENT} fit
							>정기배송 신청하기
						</Button>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</Layout>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 5rem 7rem;
		gap: 7rem;
		.calendar {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			.title {
				font-size: 1.2rem;
				border-bottom: 2px solid #6ba543;
				color: #6ba543;
			}
			.contents {
				display: flex;
				flex-direction: row;
				gap: 5rem;
			}

			.date-text {
				padding: 2rem 1rem;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 2rem;
				.tag {
					display: flex;
					gap: 1rem;
					font-weight: 800;
				}
			}
		}

		.btn-container {
			display: flex;
			gap: 1rem;
			flex-direction: column;
		}
		.product-profile {
			display: grid;
			grid-template-columns: 30rem auto;
			width: 100%;
			height: 100%;

			.image-field {
				width: 30rem;
				height: 35rem;
				position: relative;

				.image {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 0rem 3rem;
				min-width: 35rem;
				.header {
					display: flex;
					flex-direction: column;
					gap: 0.2rem;
				}
				.detail {
					display: flex;
					flex-direction: column;
					gap: 1.2rem;

					.count {
						display: grid;
						grid-template-columns: 1fr 1fr;
						font-size: 1rem;
						.value {
							display: flex;
							gap: 1rem;
							align-items: center;
							justify-content: flex-end;
						}
					}

					.amount {
						display: grid;
						grid-template-columns: 1fr 1fr;
						font-weight: 800;
						font-size: 1.1rem;
						.value {
							display: flex;
							gap: 1rem;
							align-items: center;
							justify-content: flex-end;
						}
					}
				}

				.price {
					display: flex;
					gap: 0.2rem;
					font-size: 1.8rem;
					font-weight: 800;
					padding-top: 1rem;
				}

				.product-name {
					font-size: 1.8rem;
					font-weight: 800;
					padding: 0.5rem 0rem;
				}

				.tag-unit {
					display: flex;
					gap: 0.5rem;
					font-size: 0.8rem;

					.tag {
						width: fit-content;
						height: fit-content;
						padding: 0.2rem 0.5rem;
						border-radius: 0.2rem;
						font-size: 0.9rem;
						background-color: rgba(255, 150, 0, 0.9);
						color: white;
					}

					.dlvr-possible {
						width: fit-content;
						height: fit-content;
						font-size: 0.9rem;
						padding: 0.2rem 0.5rem;
						background-color: #6ba543;
						border-radius: 0.2rem;
						font-weight: 800;
						color: white;
					}
				}
			}
		}
	}
</style>
