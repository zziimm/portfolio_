import React, { useState } from "react";
import data from "../assets/data/portfoilodata.js";
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import { styled } from "styled-components";
import { Link } from "react-router-dom";





function Cards() {
  const nodes = [].slice.call(document.querySelectorAll(".port-list"), 0);
  const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
  const classNames = ["in", "out"].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

  const getDirectionKey = (ev, node) => {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
    const x = l - (width / 2) * (width > height ? height / width : 1);
    const y = t - (height / 2) * (height > width ? width / height : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4; // 각도
  };

  class Item {
    constructor(element) {
      this.element = element;
      this.element.addEventListener("mouseover", (ev) => this.update(ev, "in"));
      this.element.addEventListener("mouseout", (ev) => this.update(ev, "out"));
    }

    update(ev, prefix) {
      this.element.classList.remove(...classNames);
      this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
    }
  }

  nodes.forEach((node) => new Item(node));

  // cards
  const CARDS = 9;
  const MAX_VISIBILITY = 3;
  
  const Card = ({title, content, period, tech}) => (
    <div className='card'>
      <h2>{title}</h2>
      <p>{period}</p>
      <h3>Description:</h3>
      <p>{content}</p>
      <h3>Tech Stack:</h3>
      <ul>
        {tech.map((list, idx) => (
          <li key={idx}>{list}</li>
        ))}
      </ul>
    </div>
  );

  const Carousel = ({children}) => {
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };



    return (
        <CardsBox>
          <Carousel>
            {data.portfolioList.map((list, i) => (
              <Link to={`/projects/${list.name}`}>
                <Card title={list.name} content={list.description} period={list.period} tech={list.tech}/>
              </Link>
            ))}
          </Carousel>
        </CardsBox>
    )
}
export default Cards;


const CardsBox = styled.div`
  display: flex;
  justify-content: center;
  

  .carousel {
    position: relative;
    width: 24rem;
    height: 30rem;
    /* perspective: 500px; */
    transform-style: preserve-3d;
  }

  .card-container {
    position: absolute;
    width: 24rem;
    height: 30rem;
    transform: 
      rotateY(calc(var(--offset) * 50deg)) 
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 2rem;
    /* background-color: hsl(0deg, 0%, calc(100% - var(--abs-offset) * 10%)); */
    background-color: hsl(167deg, calc(0% + var(--abs-offset) * 100%) , calc(36% + var(--abs-offset) * 50%));
    /* background-color: black; */
    border-radius: 1rem;
    text-align: justify;
    transition: all 0.3s ease-out;

    &:hover {
    transition: 1s;
    background-color: hsl(167deg, 20%, 36%);
    transform: translateY(-2rem);
    cursor: pointer;
    }
    
    h2 {
      color: #00b890;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 0 0.2em;
    }

    h3 {
      margin-top: 20px;
    }
    
    p, h2 {
      transition: all 0.3s ease-out;
      opacity: var(--active);
    }

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

  .nav {
    color: #d6fff6;
    font-size: 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;
    
    &.left {
      transform: translateX(-100%) translatey(-50%);
    }
    
    &.right {
      right: 0;
      transform: translateX(100%) translatey(-50%);
    }
  }


`;
