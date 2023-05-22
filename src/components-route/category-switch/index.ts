export { default as CategorySwitch } from './index.svelte';

export interface CategorySwitchItem<T = string> {
	id: T;
	text: string;
	link?: string;
}
