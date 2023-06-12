<script lang="ts">
	import _ from 'lodash';
	import { Button } from '@src/components/button';
	import { Palette } from '@src/util/palette';
	import { userInfo } from '@src/util/info/user/store';
	import { onMount } from 'svelte';
	import type { UserInfo } from '@src/routes/mypage';
	import type { SellerInfo } from '@src/components-route/seller-item';
	import { KaKaoMap, type Location } from '../kakaomap';

	$: userId = $userInfo;
	let user: UserInfo;
	let sellerList: SellerInfo[];
	let sellerAddrList: Location[];

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

	function getItemList() {
		let url = 'http://121.137.55.132:8081/seller/list';
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

	onMount(async () => {
		user = await getUserInfo();
		sellerList = await getItemList();
		sellerAddrList = _(sellerList)
			.map((d) => {
				return {
					address: d.addr,
					title: d.farmName,
					enableDlvr: enableDeliverFun(user.addr, d.addr),
					sellerInfo: d
				};
			})
			.value();
	});

	export function enableDeliverFun(userAddr: string, sellerAddr: string) {
		const userAddrSplit = userAddr.split(' ')[0];
		const sellerAddrSplit = sellerAddr.split(' ')[0];

		return userAddrSplit === sellerAddrSplit ? true : false;
	}
</script>

{#if sellerAddrList && user}
	<div class="map">
		<KaKaoMap mapData={sellerAddrList} userposition={user.addr} />
	</div>
{/if}

<style lang="scss">
	.map {
		width: 100%;
	}
</style>
