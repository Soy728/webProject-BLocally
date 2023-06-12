<script lang="ts">
	import _ from 'lodash';

	import { Button } from '@src/components/button';
	import { ComponentSizeProps } from '@src/util/size';
	import { Palette } from '@src/util/palette';
	import { Layout } from '@src/components/layout';
	import { mdiChevronRight } from '@mdi/js';
	import { IconPropType, Icon } from '@src/components/icon';
</script>

<Layout>
	<div class="root">
		<div class="title-container">
			<div class="text" data-accent>브로컬리 마켓</div>
			<div class="text">회원이 되신 것을 환영합니다!</div>
		</div>

		<div class="content">
			<div class="detail">
				<div class="item">
					<Button
						color={Palette.Color.SECONDARY}
						ghost
						fit
						size={ComponentSizeProps.XL}
						link={`/login`}
						>로그인하러 가기
						<Icon
							icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 0.8 }}
							slot="right-icon"
						/>
					</Button>
					<div class="sub-text">로그인하여 더 많은 서비스를 경험하세요</div>
				</div>
				<div class="item">
					<Button color={Palette.Color.SECONDARY} ghost size={ComponentSizeProps.XL} fit
						>브로컬리 스토리 보러가기
						<Icon
							icon={{ type: IconPropType.PATH, src: mdiChevronRight, scale: 0.8 }}
							slot="right-icon"
						/>
					</Button>
					<div class="sub-text">브로컬리 마켓의 브랜드 스토리를 전해드려요</div>
				</div>
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
	.title-container {
		padding: 7rem 0rem;
		width: 100%;
		height: 10rem;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;

		.text {
			font-size: 2rem;
			font-weight: 800;
			&[data-accent] {
				color: #6ba543;
			}
		}
	}
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 40rem;
		padding: 2rem 0rem;
		width: 30rem;
		height: 100%;

		.content {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.detail {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 3rem;

				.sub-text {
					font-size: 0.9rem;
				}
			}
		}
	}
</style>
