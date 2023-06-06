<script lang="ts">
	import _ from 'lodash';
	import { Input } from '@src/components/input';
	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';
	import { Layout } from '@src/components/layout';
	import { goto } from '$app/navigation';
	import { userInfo } from '@src/util/info/user/store';

	let username = '';
	let password = '';
	$: userInfo.set({
		id: 1,
		addr: '경기도 수원시 장안구 정자천로',
		create_date: '20220506',
		email: 'kksm456@naver.com',
		mobile: '01094553492',
		name: '이소희',
		username: 'kksm456'
	});

	function handleLogin() {
		if (_.isEmpty(username) || _.isEmpty(password)) {
			alert('입력되지 않은 정보가 있습니다 :(');
			return;
		}

		let data = {
			username,
			password
		};

		let url = 'http://121.137.55.132:8081/auth/login';

		fetch(url, {
			method: 'POST',
			mode: 'cors', //중요!!!
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((response) => {
				let message = response['data'];
				alert(message);
				if (response.status == 200) {
					userInfo.set({
						id: 1,
						addr: 'string',
						create_date: 'string',
						email: 'string',
						mobile: 'string',
						name: 'string',
						username: 'string'
					});
					goto('/', { replaceState: true, keepFocus: true });
				}
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
	}
</script>

<Layout>
	<div class="root">
		<div class="content">
			<div class="text">로그인</div>
			<div class="input-container">
				<Input
					border
					fit
					size={ComponentSizeProps.XL}
					bind:value={username}
					placeholder={'아이디'}
				/>
				<Input
					fit
					border
					type="password"
					size={ComponentSizeProps.XL}
					bind:value={password}
					placeholder={'비밀번호'}
				/>
			</div>
			<Button fit color={Palette.Color.ACCENT} size={ComponentSizeProps.XL} onClick={handleLogin}
				>로그인
			</Button>

			<div class="button-tag">
				<Button size={ComponentSizeProps.LG} ghost noAction link={'/join'}>회원가입</Button>
				<div class="line" />
				<Button size={ComponentSizeProps.LG} ghost noAction link={'/join'}>아이디 찾기</Button>
				<div class="line" />
				<Button size={ComponentSizeProps.LG} ghost noAction link={'/join'}>비밀번호 변경</Button>
			</div>
		</div>
	</div>
</Layout>

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
			gap: 2.5rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.text {
				padding: 2rem;
				font-size: 1.8rem;
			}
			.button-tag {
				display: flex;
				width: 100%;
				height: 1.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				.line {
					width: 1px;
					height: 0.8rem;
					background-color: gray;
					opacity: 0.3;
				}
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
