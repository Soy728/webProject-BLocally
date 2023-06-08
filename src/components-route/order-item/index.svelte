<script lang="ts">
	import { Image } from '@src/components/image';
	import { ComponentSizeProps } from '@src/util/size';
	import type { ItemInfo } from '@src/components-route/product-item';
	import type { OrderInfo } from '@src/routes/mypage/[page]';
	import { onMount } from 'svelte';
	import { formatDate } from '@src/util/format';

	export let orderInfo: OrderInfo;
	let item: ItemInfo;
	function getItemInfo() {
		let url = `http://121.137.55.132:8081/item/${orderInfo.itemId}`;
		fetch(url, {
			method: 'GET',
			mode: 'cors' //중요!!!
		})
			.then((res) => res.json())
			.then((response) => {
				item = response;
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
	}

	onMount(async () => {
		getItemInfo();
	});
</script>

{#if item}
	<div class="root">
		<div class="image-field">
			<div class="image">
				<Image src={item.img} cover defaultSize={ComponentSizeProps.XL} />
			</div>
		</div>
		<div class="content">
			<div class="title">
				{item.name}
			</div>
			<div class="date">
				주문 일자: {formatDate(orderInfo.entDate)}
			</div>

			<div class="addr">
				배송지: {orderInfo.addr}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.root {
		width: 100%;
		height: 15rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-radius: 0.5rem;
		padding: 1rem 1rem 1rem 0;

		.content {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: calc(100% - 15rem);

			.title {
				font-size: 1.1rem;
				font-weight: 800;
				padding-bottom: 1rem;
			}
			.date {
			}
		}
		.image-field {
			height: 100%;
			width: 13rem;
			position: relative;
			overflow: hidden;
			border-radius: 0.3rem 0.3rem 0rem 0rem;

			.image {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				transition: transform 0.3s ease-in-out;
			}
		}
	}
</style>
