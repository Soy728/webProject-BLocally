<script lang="ts">
	import { Input } from '@src/components/input';
	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';

	let id = '';
	let password = '';

	async function doPost() {
		const res = await fetch('/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				id,
				password
			})
		});

		const json = await res.json();
		return JSON.stringify(json);
	}
</script>

<!-- <div class="container mt-3">
	<form action="/action_page.php">
		<div class="mb-3 mt-3">
			<label for="uname" class="form-label">Username</label>
			<input
				type="text"
				class="form-control"
				id="username"
				placeholder="Enter username"
				name="username"
				bind:value={id}
			/>
		</div>

		<div class="mb-3">
			<label for="pwd" class="form-label">Password</label>
			<input
				type="password"
				class="form-control"
				id="pwd"
				placeholder="Enter password"
				name="pswd"
				bind:value={password}
			/>
		</div>
	</form>
</div> -->
<div class="root">
	<div class="content">
		<div class="text">로그인</div>
		<div class="input-container">
			<Input border fit size={ComponentSizeProps.XL} bind:value={id} placeholder={'아이디'} />
			<Input
				fit
				border
				type="password"
				size={ComponentSizeProps.XL}
				bind:value={password}
				placeholder={'비밀번호'}
			/>
		</div>
		<Button fit color={Palette.Color.ACCENT} size={ComponentSizeProps.XL} onClick={doPost}
			>로그인
		</Button>

		<div class="button-tag">
			<Button ghost noAction link={'/join'}>회원가입</Button>
			<Button ghost noAction link={'/join'}>아이디 찾기</Button>
			<Button ghost noAction link={'/join'}>비밀번호 변경</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 30rem;
		padding: 3rem 0rem;
		width: 100%;
		height: 100%;

		.content {
			width: 100%;
			gap: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.text {
				padding: 2rem;
				font-size: 1.8rem;
				font-weight: 500;
			}
			.button-tag {
				display: flex;
				width: 100%;
				flex-direction: row;
				justify-content: flex-end;
			}
			.input-container {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 0.7rem;
			}
		}
	}
</style>
