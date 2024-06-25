import React from "react";
import styled, { keyframes } from "styled-components";
import Cards from "../Cards";


function PortfolioMain(props) {
	
	return (
		<Cards />
	);
}

export default PortfolioMain;


const inTop = keyframes`
	from {
		top:-100%;
		left:0;
	}
	to {
		top: 0;
		left:0;
	}
`;
const outTop = keyframes`
	from {
		top: 0;
		left:0;
	}
	to {
		top: -100%;
		left:0;
	}
`;

const inRight = keyframes`
	from {
		top:0;
		left:100%;
	}
	to {
		top:0;
		left:0;
	}
`;
const outRight = keyframes`
	from {
		top:0;
		left:0;
	}
	to {
		top:0;
		left:100%;
	}
`;

const inBottom = keyframes`
	from {
		top: 100%;
		left:0;
	}
	to {
		top: 0;
		left:0;
	}
`;
const outBottom = keyframes`
	from {
		top:0;
		left:0;
	}
	to {
		top:100%;
		left:0;
	}
`;

const inLeft = keyframes`
	from {
		top: 0;
		left:-100%;
	}
	to {
		top: 0;
		left:0;
	}
`;
const outLeft = keyframes`
	from {
		top:0;
		left:0;
	}
	to {
		top:0;
		left:-100%;
	}
`;

const StyledPortWrap = styled.div`
	width: 85%;
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	> ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		/* flex-direction: column;
		align-items: center; */
		> li {
			width: 32%;
			min-height: 320px;
			margin-bottom: 2%;
			position: relative;
			background-color: #191919;
			border-radius: 2px;
			overflow: hidden;
			a {
				width: 100%;
				height: 100%;
				display: inline-block;
				> div {
					height: 100%;
					padding: 20px;
					pointer-events: none;
					.toy {
						position: absolute;
						top: 20px;
						right: 20px;
						font-size: 30px;
						color: ${(props) => props.theme.mainColor};
						img {
							width: 45px;
						}
					}

					.info-wrap {
						position: relative;
						z-index: 1;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.txt-wrap {
							.name {
								font-weight: 500;
								font-size: 22px;
								line-height: 1.3;
								color: ${(props) => props.theme.mainColor};
							}
							.time {
								font-size: 14px;
							}
							p {
								padding: 10px 0;
								font-size: 14px;
							}
						}
						.tech {
							ul {
								display: flex;
								flex-wrap: wrap;
								margin-left: -2px;
								padding-top: 3px;
								li {
									padding: 4px;
									margin: 0 2px 5px;
									border: 1px solid #fff;
									border-radius: 2px;
									font-size: 13px;
									line-height: 1;
								}
							}
						}
						span.label {
							display: block;
							padding-bottom: 3px;
							font-size: 12px;
							font-weight: 500;
						}
					}
				}
				.logoWrap {
					position: absolute;
					z-index: 1;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					text-align: center;
					justify-content: center;
					background-color: rgba(255, 180, 0, 0.92);
					.logo {
						img {
							border-radius: 1px;
							padding: 3px;
						}
					}
				}
			}
			&.in-top .logoWrap {
				animation: ${inTop} 300ms ease 0ms 1 forwards;
			}
			&.out-top .logoWrap {
				animation: ${outTop} 300ms ease 0ms 1 forwards;
			}

			&.in-right .logoWrap {
				animation: ${inRight} 300ms ease 0ms 1 forwards;
			}
			&.out-right .logoWrap {
				animation: ${outRight} 300ms ease 0ms 1 forwards;
			}

			&.in-bottom .logoWrap {
				animation: ${inBottom} 300ms ease 0ms 1 forwards;
			}
			&.out-bottom .logoWrap {
				animation: ${outBottom} 300ms ease 0ms 1 forwards;
			}

			&.in-left .logoWrap {
				animation: ${inLeft} 300ms ease 0ms 1 forwards;
			}
			&.out-left .logoWrap {
				animation: ${outLeft} 300ms ease 0ms 1 forwards;
			}
		}
	}
	@media ${(props) => props.theme.laptop} {
		> ul {
			.port-list {
				width: 49%;
				min-height: 260px;
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		width: 80%;
		padding-bottom: 60px;
		> ul {
			.port-list {
				width: 100%;
				min-height: 220px;
				margin-bottom: 20px;
				.tech {
					display: none;
				}
			}
		}
	}
`;

// export default PortfolioMain;
