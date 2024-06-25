import React from 'react';
import { styled } from "styled-components";
import Header from "../organisms/Header";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import Preloader from "../molecules/Preloader";

// const HomeLayout = styled.div`
//   /* width: 900px; */
//   width: 100%;
//   height: 800px;
//   color: #fff;
//   display: flex;
//   font-size: 64px;
//   align-items: end;
//   justify-content: start;
//   margin-bottom: 300px;

//   button {
//     color: #fff;
//     border: 1px solid #919090;
//     border-radius: 15px;
//     padding: 4px 8px;
//   }
  
//   .textBox {
//     margin-top: 20px;
//     p + p {
//       margin-top: 20px;
//       font-size: 60px;
//     }
//   }
// `;

const StyledDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto;
	}
`;




const Home = () => {
  return (
    <StyledDiv>
      <Header page="home" />
      <HomeTxtWrap />
      <Preloader />
    </StyledDiv>
    // <HomeLayout>
    //   <div>
    //     <button>Let's Meet!</button>
    //     <div className='textBox'>
    //       <p>Full-Stack Developer</p>
    //       {/* <p>Rookie</p> */}
    //       <p>with great potential</p>
    //     </div>
    //   </div>
    // </HomeLayout>
  );
};

export default Home;