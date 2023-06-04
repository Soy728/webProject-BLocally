import { writable } from 'svelte/store';

export interface UserInfo {
	id: number;
	addr: string;
	create_date: string;
	email: string;
	mobile: string;
	name: string;
	username: string;
}
export const userInfo = writable<UserInfo>();
