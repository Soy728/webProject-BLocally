export interface UserInfo {
	id: number;
	username: string;
	password: string;
	email: string;
	role: string;
	createDate: string;
	name: string;
	mobile: string;
	addr: string;
}

export interface OrderInfo {
	id: number;
	itemId: number;
	userId: number;
	mobile: string;
	addr: string;
	entDate: string;
}
