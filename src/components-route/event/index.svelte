<script lang="ts">
	import _ from 'lodash';
	import { ComponentSizeProps } from '@src/util/size';
	import { Image } from '@src/components/image';

	export let summary: boolean = false;
	let events: string[] = [
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230425102156_mb_W_TOP_s8GB.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/221017132315_mb_W_TOP_qTlg.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/221017131924_mb_W_TOP_jwd2.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/221018094027_mb_W_TOP_1pAl.jpg',
		`https://cdn.oasis.co.kr:48581/display/mainBanner/220929183631_mb_W_TOP_JhVV.jpg`,
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230407163206_mb_W_TOP_NDll.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/220726153054_mb_W_TOP_ltaa.jpg',
		'https://cdn.oasis.co.kr:48581/display/mainBanner/230522111741_mb_W_TOP_tSZz.jpg'
	];

	$: _events = summary ? events.slice(0, 4) : events;
</script>

<div class="event-items">
	{#each _events as event}
		<div class="image-field">
			<div class="image">
				<Image src={event} cover defaultSize={ComponentSizeProps.LG} />
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.event-items {
		padding-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 1fr;

		.image-field {
			height: 19rem;
			width: 36rem;
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

			cursor: pointer;
			.image {
				&:hover {
					transform: scale(1.02);
				}
			}
		}
	}
</style>
