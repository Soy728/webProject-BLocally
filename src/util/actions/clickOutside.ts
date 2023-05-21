export function clickOutside(node: HTMLElement, callback: () => void): SvelteActionReturnType {
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			callback();
		}
	};
	document.addEventListener('click', handleClick, true);
	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
