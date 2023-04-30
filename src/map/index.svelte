<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let map: any;

	onMount(async () => {
		const { kakao } = window as any;
		let container = document.getElementsByClassName('map')[0];
		var options = {
			center: new kakao.maps.LatLng(37.283013, 127.044854),
			level: 3
		};

		map = new kakao.maps.Map(container, options);

		let markerPosition = new kakao.maps.LatLng(37.283013, 127.044854);
		let marker = new kakao.maps.Marker({
			position: markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);
	});
</script>

{#if browser}
	<div class="root">
		<div class="map" />
	</div>
{/if}

<style lang="scss">
	.root {
		height: 40rem;
		width: 40rem;
		.map {
			height: 100%;
			width: 100%;
		}
	}
</style>
