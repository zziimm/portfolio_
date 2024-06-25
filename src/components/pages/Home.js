import React from 'react';
import { styled } from "styled-components";
import Header from "../organisms/Header";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import Preloader from "../molecules/Preloader";

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
  );
};

export default Home;