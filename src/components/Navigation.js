import React from "react";
import { Link } from 'react-router-dom';
import { styled } from "styled-components";

const NavigationLayout = styled.div`
  position: fixed;
  width: 70%;
  height: 50px;
  margin-right: 50px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: #919090;
`;

const NavigationBox = styled.div`

  a + a {
    margin-left: 20px;
  }
`;

const NavigationSubBox = styled.div`

  button + button {
    margin-left: 10px;
  }
  button {
    padding: 5px 10px;
    border: 1px solid #919090;
    border-radius: 15px;
    color: #000;
  }

  .talk {
    background-image: linear-gradient(to right top, #fbc2ed, #a6c1ee);
  }
`;

function Navigation () {
  return (
    <nav>
      <NavigationLayout>
        <NavigationBox>
          <a href="#">&lt; Home /&gt;</a>
          <a href="#about">&lt; About /&gt;</a>
          <a href="#skills">&lt; Skills /&gt;</a>
          <a href="#projects">&lt; Projects /&gt;</a>
          <a href="#contact">&lt; Contact /&gt;</a>
        </NavigationBox>
        <NavigationSubBox>
          <button>🌙</button>
          <button className="talk">Let's Talk</button>
        </NavigationSubBox>
      </NavigationLayout>
    </nav>

  )
}

export default Navigation;