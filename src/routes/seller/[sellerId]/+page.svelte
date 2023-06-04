<script lang="ts">
	import _ from 'lodash';
	import { SellerItem } from '@src/components-route/seller-item';
	import { Layout } from '@src/components/layout';
	import { Banner } from '@src/components-route/banner';
	import { Dropdown, type DropdownItem } from '@src/components/dropdown';
	import { onMount } from 'svelte';
	import type { SellerInfo } from '@src/components-route/seller-item';
	import { page } from '$app/stores';

	let sellerId = $page.params.sellerId;

	function getItemList() {
		//TODO: API test
		// let url = 'http://121.137.55.132:8081/item/list/{sellerId} ';
		// fetch(url, {
		// 	method: 'GET',
		// 	mode: 'cors' //중요!!!
		// })
		// 	.then((res) => res.json())
		// 	.then((response) => {
		// 		sellerList = response;
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		alert('에러: ' + error.message);
		// 	});
	}

	onMount(() => {
		getItemList();
	});
</script>
