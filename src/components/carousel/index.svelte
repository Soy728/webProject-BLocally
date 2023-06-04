<script lang="ts">
	import Siema from 'siema';
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';

	export let perPage = 4;
	export let loop = true;
	export let autoplay = 0;
	export let duration = 300;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let dots = true;
	export let threshold = 7;
	export let rtl = false;

	$: _currentIndex = startIndex;

	let siema: HTMLDivElement;
	let controller: any;
	let timer: NodeJS.Timer;
	const dispatch = createEventDispatcher();

	$: pips = controller ? controller.innerElements : [];
	$: totalDots = controller ? Math.ceil(controller.innerElements.length) : 0;
	$: siema &&
		(() => {
			controller = new Siema({
				selector: siema,
				perPage: typeof perPage === 'object' ? perPage : Number(perPage),
				loop,
				duration,
				easing,
				startIndex,
				draggable,
				multipleDrag,
				threshold,
				rtl,
				onChange: handleChange
			});

			if (autoplay) {
				timer = setInterval(right, autoplay);
			}
			return () => {
				autoplay && clearInterval(timer);
				controller.destroy();
			};
		})();

	export function isDotActive(currentIndex: number, dotIndex: number) {
		if (currentIndex < 0) currentIndex = pips.length + currentIndex;
		return currentIndex === dotIndex;
	}

	export function left() {
		controller.prev();
	}

	export function right() {
		controller.next();
	}

	export function go(index: number) {
		controller.goTo(index);
	}

	export function pause() {
		clearInterval(timer);
	}

	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange() {
		_currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

	function resetInterval(node: HTMLElement, condition: any) {
		function handleReset(event: MouseEvent) {
			pause();
			resume();
		}

		if (condition) {
			node.addEventListener('click', handleReset);
		}

		return {
			destroy() {
				node.removeEventListener('click', handleReset);
			}
		};
	}
</script>

{#if browser}
	<div class="carousel">
		<div class="slides" bind:this={siema}>
			<slot />
		</div>

		{#if dots}
			<ul>
				{#each { length: totalDots } as _, i}
					<li on:click={() => go(i)} data-active={isDotActive(_currentIndex, i)} />
				{/each}
			</ul>
		{/if}
	</div>
{/if}

<style lang="scss">
	.carousel {
		height: 100%;
		min-width: 130rem;
		padding: 2.5rem 0;
	}

	button {
		width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}
	button:focus {
		outline: none;
	}

	.left {
		left: 2vw;
	}

	.right {
		right: 2vw;
	}
	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		height: 8px;
		width: 8px;
		&[data-active='true'] {
			background-color: rgba(255, 255, 255, 1);
		}
	}
	ul li:hover {
		background-color: rgba(255, 255, 255, 0.85);
	}
</style>
