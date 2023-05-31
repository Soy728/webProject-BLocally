<script lang="ts">
	import { Carousel } from '@src/components/carousel';
	// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
	let images: string[] = [`/image/참외_banner.png`];
</script>

<Carousel autoplay={4000}>
	<!-- <div class="item" style="background-image:url(/image/참외_banner.png);" /> -->
	<div
		class="item"
		style="background-image:url(https://cdn.oasis.co.kr:48581/display/mainBanner/220929183631_mb_W_TOP_JhVV.jpg);"
	/>
	<div
		class="item"
		style="background-image:url(	https://cdn.oasis.co.kr:48581/display/mainBanner/230407163206_mb_W_TOP_NDll.jpg);"
	/>
	<div
		class="item"
		style="background-image:url(	https://cdn.oasis.co.kr:48581/display/mainBanner/220726153054_mb_W_TOP_ltaa.jpg);"
	/>

	<div
		class="item"
		style="background-image:url(https://cdn.oasis.co.kr:48581/display/mainBanner/230522111741_mb_W_TOP_tSZz.jpg);"
	/>
	<div
		class="item"
		style="background-image:url(https://cdn.oasis.co.kr:48581/display/mainBanner/230425102156_mb_W_TOP_s8GB.jpg);"
	/>
</Carousel>

<style lang="scss">
	.item {
		border-radius: 0.3rem;
		height: 18rem;
		width: 30rem;
		background-repeat: no-repeat;
		background-size: cover;
	}

	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>
