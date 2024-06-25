const skillData = {
	skillList: [
		{
			label: "Javascript",
			detail: ["Promise를 이해하고 있으며 async / await를 통해 비동기 함수를 처리 할 수 있습니다.", "함수 표현식과 함수 선언문의 차이를 알고 호이스팅을 이해하고 있습니다.", "Component를 나누고 연결할 수 있으며 props의 흐름을 이해하고 있습니다."],
			icon: "fab fa-js-square",
		},
		{
			label: "React",
			detail: ["컴포넌트 생명주기와 속성을 사용할 수 있습니다.", "axios를 활용하여 비동기 통신으로 데이터 요청을 할 수 있습니다.", "react-router-dom을 사용해서 렌더링할 페이지를 나누고 URL 파라미터와 쿼리스트링을 이해하고 있습니다."],
			icon: "fab fa-react",
		},
		{
			label: "Redux",
			detail: ["Redux Store를 통해 전역 상태 관리를 할 수 있습니다.", "useDispatch와 useSelector를 이해하고 데이터를 이동시킬 수 있습니다.", "Redux의 보일러 플레이트가 없어진 Redux Toolkit을 사용할 수 있습니다."],
			icon: "fab fa-react",
		},
		{
			label: "MongoDB",
			detail: ["NoSQL을 이해하고 MongoDB Atlas를 사용 할 수 있습니다.", "MongoDB의 연산자를 사용하여 데이터를 업데이트 할 수 있습니다.", "search index를 이용해 데이터를 효율적으로 찾을 수 있고 aggregate 메서드를 사용해서 pipeline을 구축할 수 있습니다."],
			icon: "fa-brands fa-envira",
		},
		{
			label: "Node.js",
			detail: ["Node.js의 장점인 싱글 스레드, non-blocking I/O를 이해하고 있습니다.", "Swagger를 통해서 REST API를 설계한 경험이 있고 CRUD 처리를 할 수 있습니다.", "모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다."],
			icon: "fab fa-node",
		},
		{
			label: "Express",
			detail: ["app.use()로 필요한 미들웨어를 작성하고 라우터를 분리할 수 있으며, res 메서드로 응답할 수 있습니다.", "에러 처리 미들웨어 작성을 통해 예치기 못하거나 특정 상황에 대비할 수 있습니다.", "express-session으로 세션을 관리할 수 있고 passport로 세션에 저장하고 정보를 불러와서 로그인을 유지할 수 있습니다."],
			icon: "fa-brands fa-node-js",
		},
		{
			label: "Git/Github",
			detail: ["팀프로젝트에서 git flow 전략을 사용해 버전을 관리한 경험이 있습니다.", "github를 사용하며 GUI툴뿐만 아니라 CLI 명령어도 사용 가능합니다."],
			icon: "fab fa-git-square",
		},
		{
			label: "AWS S3",
			detail: ["multer와 multer-s3, aws-sdk/client-s3를 이용해 AWS S3에 이미지를 업로드하고 이미지 URL을 MongoDB에 저장하는 미들웨어를 사용할 수 있습니다.", "Lightsail을 통해 서버를 배포한 경험이 있으며 EC2도 익히기 위한 학습을 진행 중입니다."],
			icon: "fa-solid fa-bucket",
		},
		{
			label: "Socket.io",
			detail: ["room 메서드를 이용해 유저간 1:1 실시간 채팅 기능을 구현한 경험이 있습니다.", "실시간 데이터 통신을 활용해서 실시간 알림과 확인한 채팅, 확인하지 않은 채팅방의 UI를 다르게 보이게 할 수 있습니다."],
			icon: "fa-solid fa-bolt",
		},
	],

	experienceList: [
		{
			period: "2018.11 - PRESENT",
			position: "WEB DEVELOPER",
			company: "CONER CREATIVE",
			explain: "에이전시 회사인 코너크리에이티브에서 사이트 제작과 유지보수 운영을 담당하였습니다. 삼성, 기아, 캐논 등 대기업 솔루션 경험을 익히며 폭넓은 인터렉션 제작 능력을 키웠습니다. ",
		},
		{
			period: "2018.09 - 2018.11",
			position: "PUBLISHER",
			company: "FIVESENSE SOFT",
			explain: "웹 에이전시 오감소프트에서 퍼블리싱 작업을 담당하였습니다. 그누보드를 기반으로 개발된 솔루션을 활용하여 웹 사이트를 제작 및 유지운영을 하였습니다. 도메인 기관으로 고도몰을 사용하였고, 기본적인 php 문법을 숙지하였습니다. ",
		},
		{
			period: "2017.09 - 2018.03",
			position: "E-BOOK DEVELOPER",
			company: "THE MOUM",
			explain: "플래시로 제작되었던 E-BOOK을 HTML을 기반의 웹 페이지 전자교과서 제작을 하였습니다. 지학사, 천재교육, 동아 출판사의 검정교과서 5권을 제작하였습니다.",
		},
	],

	educationList: [
		// {
		// 	period: "2015.03 - 2021.02",
		// 	position: "세명대학교 졸업",
		// 	company: "무역학 / 회계학 복수전공",
		// 	explain: "React.JS의 편리한 반응형 렌더링과 상태를 관리하는 캡슐화된 컴포넌트 개발 기술을 습득하였습니다. Vitual DOM을 활용한 랜더링의 비효율성을 최소화 하기 위하여 힘썼습니다.",
		// },
		{
			period: "2023.08 - 2024.01",
			position: "풀스택(MERN Stack) 웹개발자 양성과정",
			company: "그린컴퓨터아트학원",
			explain: "MongoDB, Express, React, Node.js를 중점적으로 진행되었고 추가적으로 Next.js의 사용법과 github를 통한 협업과 버전관리, 배포, AWS를 사용하는 방법을 배웠습니다.",
		},
		// {
		// 	period: "2016.11 - 2017.05",
		// 	position: "(NCS)스마트웹&앱콘텐츠제작 양성과정",
		// 	company: "더조은컴퓨터학원",
		// 	explain: "GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를 제작하는 법을 학습하였습니다. 동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행, 분석, 결과 보고를 수행하는 역량을 길렀습니다.",
		// },
		// {
		// 	period: "2019.08 - 2019.09",
		// 	position: "리액트(React.js)프로그래밍과정",
		// 	company: "한국소프트웨어인재개발원",
		// 	explain: "React.JS의 편리한 반응형 렌더링과 상태를 관리하는 캡슐화된 컴포넌트 개발 기술을 습득하였습니다. Vitual DOM을 활용한 랜더링의 비효율성을 최소화 하기 위하여 힘썼습니다.",
		// },
		// {
		// 	period: "2019.07 - 2019.08",
		// 	position: "노드JS(Node.js)프로그래밍 과정",
		// 	company: "한국소프트웨어인재개발원",
		// 	explain: "Node.js를 이용하여 비동기 통신 방식의 자바스크립트 프로그램 제작에 대해 익혔습니다. MongoDB등을 연결하여 데이터의 처리와 분석능력을 배웠고 동적 브라우저 뷰 구축 능력을 개발하였습니다.",
		// },
		// {
		// 	period: "2016.11 - 2017.05",
		// 	position: "(NCS)스마트웹&앱콘텐츠제작 양성과정",
		// 	company: "더조은컴퓨터학원",
		// 	explain: "GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를 제작하는 법을 학습하였습니다. 동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행, 분석, 결과 보고를 수행하는 역량을 길렀습니다.",
		// },
	],
};

export default skillData;
