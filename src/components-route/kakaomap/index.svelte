<script lang="ts">
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { Location } from '.';
	import { goto } from '$app/navigation';

	let map: any;
	export let mapData: Location[];
	export let userposition: string;

	async function kakao() {
		const { kakao } = window as any;
		let container = document.getElementsByClassName('map')[0];
		var options = {
			center: new kakao.maps.LatLng(37.283013, 127.044854),
			level: 3
		};

		map = new kakao.maps.Map(container, options); // 지도 생성

		var geocoder = new kakao.maps.services.Geocoder();

		let _userposition = userposition;
		geocoder.addressSearch(_userposition, function (result: any, status: any) {
			var imageSrc = '/logo/icon_red.png',
				imageSize = new kakao.maps.Size(35, 40),
				imageOption = { offset: new kakao.maps.Point(27, 69) };

			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
			// 정상적으로 검색이 완료됐으면
			if (status === kakao.maps.services.Status.OK) {
				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

				// 결과값으로 받은 위치를 마커로 표시합니다
				var marker = new kakao.maps.Marker({
					map: map,
					position: coords,
					image: markerImage
				});
				marker.setMap(map); //추가한 코드

				// LatLngBounds 객체에 좌표를 추가합니다
				bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.

				// 인포윈도우로 장소에 대한 설명을 표시합니다
				var infowindow = new kakao.maps.InfoWindow({
					content:
						'<div style="width:150px;text-align:center;padding:6px 0;">' + '내 위치' + '</div>'
				});
				infowindow.open(map, marker);

				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				// map.setCenter(coords); //제거한 코드
				setBounds(); //추가한 코드
			}
		});

		var positions = mapData;

		// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
		var bounds = new kakao.maps.LatLngBounds(); //추가한 코드

		positions.forEach(function (position) {
			// 주소로 좌표를 검색합니다
			geocoder.addressSearch(position.address, function (result: any, status: any) {
				var imageSrc = position.enableDlvr ? '/logo/icon_main.png' : '/logo/icon_gray.png',
					imageSize = new kakao.maps.Size(35, 40),
					imageOption = { offset: new kakao.maps.Point(27, 69) };

				var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

				// 정상적으로 검색이 완료됐으면
				if (status === kakao.maps.services.Status.OK) {
					var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

					// 결과값으로 받은 위치를 마커로 표시합니다
					var marker = new kakao.maps.Marker({
						map: map,
						position: coords,
						image: markerImage,
						clickable: true
					});
					marker.setMap(map); //추가한 코드

					// LatLngBounds 객체에 좌표를 추가합니다
					bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.

					// 인포윈도우로 장소에 대한 설명을 표시합니다
					var infowindow = new kakao.maps.InfoWindow({
						content:
							'<div style="width:150px;text-align:center;padding:6px 0;">' +
							position.title +
							'</div>'
					});
					infowindow.open(map, marker);
					kakao.maps.event.addListener(marker, 'click', function () {
						position.sellerInfo
							? goto(`/seller/${position.sellerInfo?.id}`, { replaceState: true, keepFocus: true })
							: undefined;
					});

					// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
					// map.setCenter(coords); //제거한 코드
					setBounds(); //추가한 코드
				}
			});
		});

		function setBounds() {
			//추가한 함수
			// LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
			// 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
			map.setBounds(bounds);
		}
	}

	onMount(() => kakao());
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
