<script lang="ts">
	import _ from 'lodash';
	import { Layout } from '@src/components/layout';
	import { Event } from '@src/components-route/event';
</script>

<Layout>
	<div class="root">
		<div class="group">
			<div class="header">
				<div class="title">이벤트</div>
			</div>
			<Event />
		</div>
	</div>
</Layout>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 6rem;
		align-items: center;
		justify-content: center;
		height: 100%;
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0rem;
			width: 100%;
			.title {
				font-size: 1.8rem;
				font-weight: 700;
				padding: 4rem 0 2.5rem 0;
			}
		}
	}
</style>
