// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export async function wait(ms: number = 0) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function tick() {
	await wait(0);
}
