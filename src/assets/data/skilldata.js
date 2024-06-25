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

	],

	educationList: [
		{
			period: "2023.08 - 2024.01",
			position: "풀스택(MERN Stack) 웹개발자 양성과정",
			company: "그린컴퓨터아트학원",
			explain: "MongoDB, Express, React, Node.js를 중점적으로 진행되었고 추가적으로 Next.js의 사용법과 github를 통한 협업과 버전관리, 배포, AWS를 사용하는 방법을 배웠습니다.",
		},
	],
};

export default skillData;
