import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";

function AboutTxtWrap() {
	return (
		<StyledHome>
			<div className="left">
				<div className="color-block"></div>
				<div className="img-box"></div>
			</div>
			<div className="right">
				<div className="tit-wrap">
					<Heading level="2">Welcome !</Heading>
					<Heading>
						I'M{" "}
						<span className="message">
							<strong>JIMIN CHUN</strong>
							<strong>WEB DEVELOPER</strong>
							<strong>FULL DEVELOPER</strong>
						</span>
					</Heading>
					{/* <p>I’m a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p> */}
					<p>
						안녕하세요, 저는 천지민입니다. 😊
						<br />
						지속적인 성장에 관심이 많고 동료들과의 커뮤니케이션, 상호 피드백과 리뷰를 통해 정교함을 추구합니다. 긍적적인 사고로 맡은 일에 책임과 자부심을 갖고 임하며 만족도 높은 결과물을 만들어 내기 위해 노력하며 도전하는 개발자입니다.
					</p>
				</div>
				<section>
					<Heading level="2">PERSONAL INFOS</Heading>
					<ul>
						<li>
							<span>Name : </span>천지민
						</li>
						<li>
							<span>Age : </span>29, 1996.08
						</li>
						<li>
							<span>Phone : </span>010.7376.1276
						</li>
						<li>
							<span>Address : </span>경기도 안산시
						</li>
						<li>
							<span>Email : </span>wlalscjs30@naver.com
						</li>

					</ul>
				</section>
				<Link to="/about" className="more-btn">
					MORE ABOUT ME
				</Link>
			</div>
		</StyledHome>
	);
}

const messageslide = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -4.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -4.5rem;
		width: 0;
	}
	66%{
		top: -9rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -9rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const messageslideMo = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -3.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -3.5rem;
		width: 0;
	}
	66%{
		top: -7rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -7rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const StyledHome = styled.main`
	display: flex;
	height: 100vh;
	max-width: 1600px;
	margin: auto;
	.left {
		flex: 0 0 35%;
		position: relative;
		max-width: 600px;
		background-color: #111;
		&::after {
			content: "";
			display: inline-block;
			position: fixed;
			top: 0;
			left: calc(50% - 1440px);
			z-index: -1;
			width: 50%;
			max-width: 1000px;
			height: 100%;
			background-color: ${(props) => props.theme.mainColor};
		}
		.color-block {
			position: absolute;
			top: -60%;
			left: -40vw;
			z-index: 0;
			width: 50vw;
			height: 200%;
			transform: rotate(-12deg);
			background-color: ${(props) => props.theme.mainColor};
		}
		.img-box {
			height: 90vh;
			margin: 5vh 0 0 30px;
			background-image: url(${(props) => props.theme.mainSrc});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
			border-radius: 15px;
			box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
			position: relative;
			z-index: 1;
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 0 10% 0 7%;
		.tit-wrap {
			margin-bottom: 60px;
			h2 {
				font-size: 22px;
			}
			h1 {
				margin-bottom: 20px;
				font-size: 45px;
				font-weight: bold;
				white-space: nowrap;
				overflow: hidden;
				position: relative;
				.message {
					display: block;
					overflow: hidden;
					position: absolute;
					top: 0;
					left: 80px;
					animation: ${messageslide} 8s ease-in-out infinite;
					strong {
						display: block;
						color: ${(props) => props.theme.mainColor};
					}
				}
			}
			p {
				font-size: 16px;
				line-height: 1.6;
				padding: 0 15% 0 0;
				max-width: 670px;
				word-break: keep-all;
			}
		}
		section {
			margin-bottom: 40px;
			h2 {
				margin-bottom: 20px;
				font-size: 26px;
				font-weight: 600;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					width: 50%;
					padding-bottom: 10px;
					font-size: 16px;
					font-weight: 500;
					color: ${(props) => props.theme.mainColor};
					span {
						font-weight: 400;
						opacity: 0.8;
						color: #fff;
					}
				}
			}
		}
		.more-btn {
			padding: 0px 40px;
			border-radius: 26px;
			background-color: ${(props) => props.theme.mainColor};
			font-size: 15px;
			font-weight: 500;
			color: #fff;
			line-height: 46px;
			letter-spacing: 0.5px;
		}
	}
	@media ${(props) => props.theme.laptop} {
		.left {
			.color-block {
				top: -60%;
				left: -25vw;
				width: 40vw;
				height: 200%;
				transform: rotate(-9deg);
			}
		}
		.right {
			padding-right: 5%;
			.tit-wrap {
				margin-bottom: 40px;
				h1 {
					margin-bottom: 10px;
					letter-spacing: -0.5px;
				}
			}
			section {
				h2 {
					margin-bottom: 10px;
				}
				ul {
					li {
						width: 100%;
					}
				}
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		flex-wrap: wrap;
		.left {
			flex: none;
			width: 100%;
			overflow: hidden;
			.color-block {
				left: -40vw;
				width: 80vw;
				min-width: 250px;
				transform: rotate(-12deg);
			}
			.img-box {
				width: 90vw;
				height: 55vh;
				margin: 3vh 5vw;
				background-position: center;
			}
		}
		.right {
			width: 100%;
			flex: none;
			margin: 5vh 0;
			padding-bottom: 5vh;
			.tit-wrap {
				h1 {
					font-size: 35px;
					.message {
						left: 60px;
						animation: ${messageslideMo} 8s ease-in-out infinite;
					}
				}
				h2 {
					font-size: 20px;
				}
				p {
					padding-right: 5%;
				}
			}
		}
	}
`;

export default AboutTxtWrap;
