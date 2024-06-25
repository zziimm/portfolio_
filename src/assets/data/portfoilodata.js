const portfolioData = {
	portfolioList: [
		{
			name: "TON &",
			period: "2023.11 - 2023.12",
			project: "Toy",
			logo: "instagram",
			percent: "100%",
			link: "https://minton1000.netlify.app/",
			github: "https://github.com/zziimm/teamstrong1000",
			description: "지역 내 배드민턴 활동을 활성화하기 위해 개발하게 되었습니다. \n 경기를 등록해 신청을 받고 경기 후에는 승패여부를 기록 할 수 있으며, 등록/신청 시 내일정에 일정이 바로 추가되는 기능이 있습니다. \n3인 프로젝트에서 팀장으로 진행하였습니다.",
			tech: ["React", "Redux", "Aioxs", "styled-components", "react-router-dom", "MongoDB", "Node.js", "Express", "Passport"],
			image: [
				{
					name: "ton&/goni_thum.gif",
					tit: "메인페이지",
					desc: "회원들이 게시한 매치를 확인할 수 있습니다. \n 매치에 참여하면 '내일정'과 '마이페이지'에 일정이 추가됩니다.",
				},
				{
					name: "ton&/mintonCalendar.png",
					tit: "일정 관리하기",
					desc: "google calendar api를 통해 공휴일과 구글 캘린더에 등록한 일정을 표시해주며 \n 개인적인 일정을 직접 추가할 수 있습니다.",
				},
				{
					name: "ton&/mintonRank.png",
					tit: "명예의 전당",
					desc:
						"클럽에 가입하고 승패를 기록해 팀 순위를 볼 수 있습니다. \n DB에 저장된 개인 승패 데이터를 기반으로 승률을 산출해 내림차순으로 정렬됩니다.",
				},
				{
					name: "ton&/mintonMyPage.png",
					tit: "승리 기록하기",
					desc:
						"경기가 완료되면 해당 매치를 눌러 참가자들에게 승리/패배 확정여부 데이터를 보낼 수 있습니다. \n 데이터를 받은 참가자들이 모두 확정지으면 각자 DB에 경기결과가 입력됩니다.",
				},
			],
		},
		{
			name: "My Meong",
			project: "Toy",
			logo: "instagram",
			period: "2023.12 - 2024.01",
			percent: "100%",
			github: "https://github.com/zziimm/finalProject",
			description: "반려견에 대한 맞춤형 정보를 제공하고 공유하며, 자사 제품을 직접 홍보/판매하기 위해 개발되었습니다.\n 회원은 가입 시 입력한 반려견의 몸무게, 나이 등을 기반으로 커뮤니티의 관련글과 반려견 조건 맞는 상품을 추천을 수 있습니다.",
			tech: ["React", "Redux", "Aioxs", "EJS", "Node.js", "MongoDB", "Express", "Passport", "Socket.io", "AWS S3"],
			image: [
				{
					name: "mong/mongMain.png",
					tit: "메인페이지",
					desc: "회원가입 창에서 입력한 정보를 MongoDB에 저장하여 회원가입이 실행됩니다.\n DB의 정보들을 토대로 로그인이 실행됩니다.",
				},
				{
					name: "mong/mongSignup.png",
					tit: "회원가입",
					desc:
						"회원가입 시 맞춤정보 제공을 위한 정보를 받습니다. \n 비밀번호는 bcrypt로 암호화하여 보안을 강화하고 회원 중 중복이 없는지 유효성 검사를 진행합니다. \n 정보를 입력하지 않아도 가입이 가능하지만 사용할 수 있는 기능이 제한적입니다.",
				},
				{
					name: "mong/mongChat.png",
					tit: "실시간 채팅",
					desc: "socket.io를 통한 실시간 채팅이 가능합니다. \n DB에 저장된 채팅방은 두 회원의 uid로 새로운 고유값으로 식별되며 '개설하기'를 누를 때 DB에서 방의 uid가 식별되면 기존 대화를 불러오고 식별되지 않으면 새로운 데이터를 생성합니다. \n 목록은 최근 응답한 채팅 순서로 정렬되며 읽지 않은 채팅 알림, 마지막 답장 내용과 현재 시간부터 몇 시간 전에 왔는지 표시됩니다.",
				},
				{
					name: "mong/mongMap.png",
					tit: "지도 검색",
					desc:
						"kakaoMap API를 활용하여 지도활용 및 검색이 가능합니다.  \n",
				},
				{
					name: "mong/mongCredit.png",
					tit: "결제 화면",
					desc: "bootpay API를 사용하여 실제 결제가 가능합니다. \n ",
				},
			],
		},
		{
			name: "IMJ",
			project: "Toy",
			logo: "instagram",
			period: "2024.05 - 2024.05",
			percent: "100%",
			link: "https://sage-faloodeh-cf962e.netlify.app/",
			github: "https://github.com/zziimm/triPlaner",
			description: "여행일정을 보다 간결하고 보기 편하게 도와주는 웹 서비스입니다. 'I'm' 과 MBTI에서 계획적인 성격을 나타내는 'J'를 합쳐서 작명했습니다. 여행중 모바일을 통한 접근이 많을 것을 고려하여 모바일 환경에서 사용하기 편하게 제작하였고 혼자 진행한 프로젝트입니다.",
			tech: ["React", "Redux", "react-router-dom", "firebase"],
			image: [
				{
					name: "planer/imjLogin.gif",
					tit: "로그인",
					desc: "firebase-Authentication을 통해 회원을 식별하고 합니다. \n 토큰 수명이 1시간이기 때문에 지정시간이 지나 토큰이 만료된 상황을 고려해 개인 페이지에서 토큰이 없다면 로그인페이지로 유도합니다. ",
				},
				{
					name: "planer/imjList.gif",
					tit: "일정 리스트",
					desc: "데이터들은 실시간으로 DB에 업데이트되고 사용자에게 보여집니다. \n 임의의 id값으로 DB에 저장되어서 데이터를 불러올 때 원하는 순서로 오지 않던 문제가 있었는데 데이터를 불러와서 날짜나 지정된 순번에 맞게 소팅되는 함수를 만들어서 해결했습니다."
				},
				{
					name: "planer/imjDetail.gif",
					tit: "일정 상세페이지",
					desc: "상세 일정을 기록하고 진행된 일정은 표시할 수 있으며 수정과 삭제가 가능합니다. \n 데이터를 직관적으로 관리하기 위해 상세 데이터의 컬렉션을 별도로 제작하였습니다. \n 각 데이터들은 uid로 이어져있으며 맺어진 관계를 기반으로 필요한 데이터를 받아올 수 있습니다.",
				},
			],
		},
	],
};

export default portfolioData;
