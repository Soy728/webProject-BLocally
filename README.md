# [Blocally: Brand Locally] 로컬 푸드 직배송 플랫폼 

![basic_4x](https://github.com/Soy728/webProject-BLocally/assets/77173342/24a5b2f8-b404-4861-af6a-31e2103664f8)

<br />

## 💁 프로젝트 소개
> 2023.03.05 ~ 2023.07.10 - AJOU University Media Project
<br />

로컬 식품을 `저렴하고`, `신선하게` 구매 할 수 있는 `로컬 푸드 직배송 플랫폼`
<br />

가까운 농장과 소비자 간의 유통과정을 제거하여 농장주는 더 큰 수익을 창출하고, 소비자는 보다 저렴하게 신선 식품을 구입 할 수 있습니다.

<br />
<br />

## 👩‍💻 핵심기능 소개
### 1. 카카오맵 API를 활용한 직배송 가능 여부 확인 기능
- 소비자는 가까운 거리에 있어 직배송이 가능한 농장을 확인하고, 물건을 구매 할 수 있습니다.
- 직배송이 가능한 농장의 위치를 확인하고 해당 농장이 판매하는 상품들을 구매할 수 있도록 구현해 둔 기능입니다.
<img width="650" alt="image" src="https://github.com/Soy728/webProject-BLocally/assets/77173342/6d5a354a-7d99-40e3-8441-221e86538071">


<br />

### 2. 자영업자를 위한 정기 배송 기능 구현
- 캘린더의 날짜 지정하여 주기적으로 상품을 제공 받을 수 있습니다.
- 스벨트의 캘린더 라이브러리를 커스텀하여 프론트 기능을 구현하였습니다.

<img width="400" alt="image" src="https://github.com/Soy728/webProject-BLocally/assets/77173342/2b6bb08c-17f1-477b-af5c-f2d489f56561">


<br />

### 3. 보기 쉬운 리스팅과 필터링 기능
- 상품 탭을 클릭하면 농산물이 종류별로 분류되어 있으며 사용자가 원하는 순서대로 리스팅하여 볼 수 있습니다.
- 로컬 농장 탭을 통해 개별 농장이 판매하는 상품들을 한눈에 볼 수 있습니다.
<br />

<br />
<br />

## ⛏️ 프론트앤드 기술 스택
<div style="display:flex; flex-direction:row;">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=black"> 
    <img src="https://img.shields.io/badge/svelte-FF3E00?style=flat-square&logo=svelte&logoColor=black"> 
    <img src="https://img.shields.io/badge/sass-CC6699?style=flat-square&logo=sass&logoColor=black"> 
</div>


<br />


## 폴더구조
```
📂 src
├── 📂 routes
│   ├── 📂 event
│   ├── 📂 join
│   │    ├── 📂 customer
│   │    └──  📂 seller
│   ├── 📂 login
│   ├── 📂 mypage
│   ├── 📂 product
│   │    ├── 📂 [productId]
│   │    ├──  📂 category
│   │         └── 📂 [category]
│   ├── 📂 regular-delivery
│   ├── 📂 seller
│   │    └── 📂 [sellerId]
│   ├── +page.svelte
│   └── +layout.svlete
│   
├── 📂 components
│   ├── 📁 Button
│   ├── 📁 Carousel
│   ├── 📁 Callender
│   ├── 📂 Dropdown
│   ├── 📁 FieldGrid
│   ├── 📂 Icon
│   ├── 📂 Image
│   ├── 📂 Input
│   ├── 📂 Layout
│   ├── 📂 Modal
│   └── 📂 Search
│   
├── 📂 components-route
│   ├── 📁 Banner
│   ├── 📁 Category-switch
│   ├── 📁 Event
│   ├── 📂 Header
│   ├── 📁 KakaoMap
│   ├── 📂 Location-modal
│   ├── 📂 Order-item
│   ├── 📂 Product-item
│   ├── 📂 Seller-item
│   ├── 📂 Quick-menu
│   └── 📂 Search
│   
├── 📂 lib
│   ├── 📂 writable-storage
│   │   └── index.ts
├── 📂 util
│   ├── 📂 actions
│   │   └── clickoutside.ts
│   ├── 📂 info
│   │   └── 📂 user
│   │        └── store.ts
│   ├── 📂 palette
│   ├── format.ts
│   ├── size.ts
│   ├── style.ts
│   └── time.ts
│   
└──📂 static
    └── 📂 logo

```

<br />

## 사용 라이브러리
```
	"devDependencies": {
		"@sveltejs/adapter-auto": "^2.0.0",
		"@sveltejs/kit": "^1.5.0",
		"@types/lodash": "^4.14.194",
		"@types/node": "^18.15.0",
		"@types/numeral": "^2.0.2",
		"@types/siema": "^1.4.8",
		"@typescript-eslint/eslint-plugin": "^5.45.0",
		"@typescript-eslint/parser": "^5.45.0",
		"eslint": "^8.28.0",
		"eslint-config-prettier": "^8.5.0",
		"eslint-plugin-svelte3": "^4.0.0",
		"prettier": "^2.8.0",
		"prettier-plugin-svelte": "^2.8.1",
		"svelte": "^3.54.0",
		"svelte-carousel": "^1.0.25",
		"svelte-check": "^3.0.1",
		"tslib": "^2.4.1",
		"typescript": "^4.9.3",
		"vite": "^4.0.0"
	},

	"dependencies": {
		"@mdi/js": "^7.2.96",
		"@sveltejs/adapter-static": "^2.0.1",
		"csstype": "^3.1.2",
		"kakao-map-api": "^0.0.3",
		"lodash": "^4.17.21",
		"module-alias": "^2.2.2",
		"moment": "^2.29.4",
		"node-sass": "^8.0.0",
		"numeral": "^2.0.6",
		"path": "^0.12.7",
		"s-date-range-picker": "^0.3.0",
		"sass": "^1.59.2",
		"siema": "^1.5.1",
		"svelte-calendar": "^3.1.6",
		"tenel-kakao-map": "^1.1.2"
	}
```

