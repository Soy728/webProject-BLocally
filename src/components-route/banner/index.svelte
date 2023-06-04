<script lang="ts">
	import { Carousel } from '@src/components/carousel';
	let images: string[] = [
		`https://cdn.oasis.co.kr:48581/display/mainBanner/220929183631_mb_W_TOP_JhVV.jpg`,
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230407163206_mb_W_TOP_NDll.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/220726153054_mb_W_TOP_ltaa.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230522111741_mb_W_TOP_tSZz.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230425102156_mb_W_TOP_s8GB.jpg'
	];
</script>

<Carousel autoplay={4000}>
	{#each images as image, i}
		<div class="item" style="background-image:url({image});" />
	{/each}
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
