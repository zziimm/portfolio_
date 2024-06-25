import React from 'react';
import { styled } from "styled-components";
import { BsMoonStarsFill, BsFillSunFill, BsGithub, BsFillEnvelopeAtFill  } from "react-icons/bs";
// import profile from "../images/Profile.jpg";


const HeaderLayout = styled.div`
  position: fixed;
  width: 350px;
  height: 90vh;
  background-color: #262626;
  border-radius: 25px;
  padding: 40px 40px;
  color: #fff;
  /* text-align: center; */

  .nameSection {
    display: flex;
    color: #fff;
    font-size: 20px;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  .imgSection {
    margin-top: 20px;
    width: 100%;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 15%;
    border-radius: 20px;
  }

  .infoSection {
    margin-top: 50px;
    
    span {
      display: block;
      margin-bottom: 5px;
      font-size: 18px;
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      color: #919090;
      margin-top: 50px;
    }
  }
  .contactSection {
    margin-top: 30px;
    text-align: center;
    svg {
      border: 2px solid #919090;
      border-radius: 50%;
      padding: 4px;
      width: 40px;
      height: 40px;
    }
    svg + svg {
      margin-left: 20px;
    }
  }

  .workBtn {
    margin-top: 10px;
    text-align: center;
    background-image: linear-gradient(to right top, #fbc2ed, #a6c1ee);
    border: 1px solid #919090;
    border-radius: 20px;

    button {
      font-size: 14px;
      padding: 10px 40px;
    }
    button:hover{
      transition: 0.3s;
    }
  }

  .w-btn {
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
  }
  .w-btn:hover {
      letter-spacing: 2px;
      transform: scale(1.2);
      cursor: pointer;
    }
  .w-btn:active {
      transform: scale(1.5);
    }
  .w-btn-gra1 {
      background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
      color: white;
    }
  .w-btn-gra-anim {
      background-size: 400% 400%;
      animation: gradient1 5s ease infinite;
    }
  @keyframes gradient1 {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }

`

function Header() {
  return (
    <header>
      <HeaderLayout>
        <div className='nameSection'>
          <BsMoonStarsFill />
          <span>Chun</span>
          <span>Jimin</span>
        </div>
        <div className='imgSection' />
        <div className='infoSection'>
          <span className='subtitle'>Specialization:</span>
          <span>- forntend developer</span>
          <span>and using Socket.io</span>
          <span className='subtitle'>Born:</span>
          <span>- 96. 08. 30</span>
          <span className='subtitle'>Based in:</span>
          <span className='gothic-a1-regular'>- 경기도 안산시</span>
        </div>
        <div className='contactSection'>
          <BsGithub />
          <BsFillEnvelopeAtFill />
        </div>
        <div className='workBtn'>
          <button>Let's Work Together</button>
        </div>
        <button class="w-btn w-btn-gra1 w-btn-gra-anim" type="button">
          BUTTON
        </button>
      </HeaderLayout>
    </header>
  );
}

export default Header;