<script lang="ts">
	import { Button } from '../../components/button';
</script>

<div class="root">
	<div class="user-menu">
		<Button>로그인</Button>
		<Button>회원가입</Button>
		<Button>주문/배송조회</Button>
		<Button>장바구니</Button>
	</div>
</div>

<style lang="scss">
	.root {
		width: 100%;
		height: 10rem;
		display: flex;

		.user-menu {
			display: flex;
			height: fit-content;
			flex-direction: row;
		}
	}
</style>
