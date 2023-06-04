<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Layout } from '@src/components/layout';

	let selectedId: string = $page.params.productId;
</script>

<Layout>
	{selectedId}
</Layout>
