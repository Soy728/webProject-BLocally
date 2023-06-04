<script lang="ts">
	import _ from 'lodash';

	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';
	import { Input } from '@src/components/input';
	import { Layout } from '@src/components/layout';

	let username = '';
	let password = '';
	let passwordAuth = '';
	let email = '';
	let name = '';
	let mobile = '';
	let addr = '';

	function handleInsertUser() {
		if (
			_.isEmpty(username) ||
			_.isEmpty(password) ||
			_.isEmpty(passwordAuth) ||
			_.isEmpty(email) ||
			_.isEmpty(name) ||
			_.isEmpty(mobile) ||
			_.isEmpty(addr)
		) {
			alert('입력되지 않은 정보가 있습니다 :(');
			return;
		}

		if (password != passwordAuth) {
			alert('비밀번호를 다시 확인해주세요 :(');
			return;
		}

		let data = {
			username,
			password,
			email,
			name,
			mobile,
			addr
		};

		console.log(JSON.stringify(data));

		let url = 'http://121.137.55.132:8081/auth/insertUser';

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
			})
			.catch((error) => {
				alert('에러: ' + error.message);
			});
	}
</script>

<Layout>
	<div class="root">
		<div class="content">
			<div class="text">소비자 회원가입</div>
			<div class="input-container">
				<div class="item">
					<div class="text">이름</div>
					<Input border fit size={ComponentSizeProps.XL} bind:value={name} placeholder={'이름'} />
				</div>
				<div class="item">
					<div class="text">아이디</div>
					<Input
						border
						fit
						size={ComponentSizeProps.XL}
						bind:value={username}
						placeholder={'아이디'}
					/>
				</div>
				<div class="item">
					<div class="text">비밀번호</div>
					<Input
						fit
						border
						type="password"
						size={ComponentSizeProps.XL}
						bind:value={password}
						placeholder={'비밀번호'}
					/>
				</div>
				<div class="item">
					<div class="text">비밀번호 확인</div>
					<Input
						fit
						border
						type="password"
						size={ComponentSizeProps.XL}
						bind:value={passwordAuth}
						placeholder={'비밀번호 확인'}
					/>
				</div>
				<div class="item">
					<div class="text">이메일</div>
					<Input
						border
						fit
						size={ComponentSizeProps.XL}
						bind:value={email}
						placeholder={'이메일'}
					/>
				</div>
				<div class="item">
					<div class="text">휴대폰 번호</div>
					<div class="detail">
						<Input
							border
							fit
							size={ComponentSizeProps.XL}
							bind:value={mobile}
							placeholder={'휴대폰 번호'}
						/>

						<Button
							fontStyle={{ fontSize: '1.1rem' }}
							width="8rem"
							color={Palette.Color.PRIMARY}
							size={ComponentSizeProps.XL}
							onClick={() => {}}>인증받기</Button
						>
					</div>
				</div>
				<div class="item">
					<div class="text">인증번호</div>
					<div class="detail">
						<Input border fit size={ComponentSizeProps.XL} placeholder={'인증번호'} />
						<Button
							fontStyle={{ fontSize: '1.1rem' }}
							width="8rem"
							color={Palette.Color.PRIMARY}
							size={ComponentSizeProps.XL}
							onClick={() => {}}>확인</Button
						>
					</div>
				</div>

				<div class="item">
					<div class="text">주소</div>
					<Input border fit size={ComponentSizeProps.XL} bind:value={addr} placeholder={'주소'} />
				</div>
			</div>
			<Button
				fit
				color={Palette.Color.ACCENT}
				size={ComponentSizeProps.XL}
				onClick={handleInsertUser}
				>회원가입
			</Button>
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
			gap: 4rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.text {
				padding: 2rem;
				font-size: 1.8rem;
			}
			.input-container {
				width: 28rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;

				.item {
					.detail {
						display: flex;
						gap: 1rem;
					}
					.text {
						padding: 0.8rem 0rem;
						font-size: 1.2rem;
					}
				}
			}
		}
	}
</style>
