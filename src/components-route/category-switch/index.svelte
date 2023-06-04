<script lang="ts">
	type T = $$Generic;

	import _ from 'lodash';

	import { attr } from '@src/util/style';
	import type { CategorySwitchItem } from '.';
	import { ComponentSizeProps } from '@src/util/size';
	import { Button } from '@src/components/button';

	export let size: ComponentSizeProps = ComponentSizeProps.LG;
	export let selectedId: T | undefined = undefined;
	export let items: CategorySwitchItem<T>[];
	export let align: 'vertical' | 'horizontal' = 'horizontal';

	let _selectedId: T = selectedId || items[0].id;
	$: selectedId = _selectedId;
</script>

<div class="root" data-align={attr(align)}>
	{#each items as item}
		<div class="btn-container" data-select={attr(item.id === _selectedId)}>
			<Button
				fit
				style={{ height: '3rem' }}
				onClick={() => {
					_selectedId = item.id;
				}}
				{size}
				link={item.link ? item.link : undefined}
				>{item.text}
			</Button>
		</div>
	{/each}
</div>

<style lang="scss">
	.root {
		display: flex;
		width: 80rem;
		gap: 1rem;

		align-items: center;
		justify-content: center;
		&[data-align='vertical'] {
			flex-direction: column;
		}
		&[data-align='horizontal'] {
			flex-direction: row;
		}

		.btn-container {
			width: 100%;

			&[data-select] {
				:global(div[data-button]) {
					color: white !important;
					background-color: #333333 !important;
				}
			}
		}
	}
</style>
