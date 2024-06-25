import styled from "styled-components";

export const BubblesLayout = styled.div`

    .bubbles {
    position:absolute;
    bottom: 0;
    z-index: -9999;
    display: flex;
    justify-content: space-around;
    
        span {
            overflow: hidden;
            // position: absolute;
            width: 7vw;
            height: 7vw;
            // margin: 0 4px;
            border-radius: 50%;
            // opacity: 0.6;
            animation: bubbelUp 15s linear infinite;
            
            &.purple {
                background-color: #D9D7F1;
            }
            &.yellow {
                background-color: #FFFDDE;
            }
            &.green {
                background-color: #E7FBBE;
            }
            &.pink {
                background-color: #FFCBCB;
            }
            &.blue {
                background-color: #D6E5FA;
            }
            &.b1 {
                animation-duration: calc(30s/1);
            }
            &.b2 {
                animation-duration: calc(40s/2);
            }
            &.b3 {
                animation-duration: calc(30s/3);
            }
            &.b4 {
                animation-duration: calc(30s/4);
            }
            &.b5 {
                animation-duration: calc(40s/5);
            }
        }

        @keyframes bubbelUp {
            0% {
                opacity: 0.3;
                transform: translateY(100vh) scale(0.4);
            }
            75% {
                opacity: 0.8;
            }
            100% {
                opacity: 0.1;
                transform: translateY(-800px) scale(1.7);
            }
        }
    }
`;
