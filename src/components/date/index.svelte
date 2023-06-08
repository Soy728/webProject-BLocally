<script lang="ts">
	import _ from 'lodash';

	import { InlineCalendar } from 'svelte-calendar';
	import moment from 'moment';

	export let title: string = 'Date';
	export let selected: Date | undefined = undefined;
	export let onClick: () => void = () => {};

	export let start: Date | undefined;
	export let end = moment(moment(new Date()).format('YYYY-MM-DD')).add(21, 'd').toDate();
</script>

<div class="root">
	{title}
	<div data-ui-calender on:click={onClick}>
		<InlineCalendar
			bind:selected
			{start}
			{end}
			theme={{
				calendar: {
					shadow: 'none',
					width: '23rem',

					legend: {
						height: '2rem'
					},

					font: {
						regular: '.75em',
						legend: '0.8rem'
					}
				}
			}}
		/>
	</div>
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
	}
	:global([data-ui-calender]) {
		border-radius: 0.5rem;
		overflow: hidden;
	}

	:global([data-ui-calender] a) {
		transition: none !important;
	}
	:global([data-ui-calender] *) {
		font-family: 'Chakra Petch', sans-serif;
	}
	:global([data-ui-calender] .controls) {
		height: 3rem;
		font-size: 0;
	}
	:global([data-ui-calender] .controls .button) {
		height: 3rem;
		font-size: 1rem;
	}
	:global([data-ui-calender] .controls .button i) {
		width: 0.5rem;
		height: 0.5rem;
	}
	:global([data-ui-calender] .legend > span) {
		font-size: 0.72rem;
		font-weight: 700;
	}
</style>
