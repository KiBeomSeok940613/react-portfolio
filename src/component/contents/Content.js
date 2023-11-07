import React, { useState } from "react";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";


// content 시작
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Content_Wrap = styled.div`
  margin: 100px 0 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;
const Content_type_wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  margin-bottom: 100px;
  li {
    font-size: 1.25rem;
  }
`;

const ContentSkills = styled.div`
  max-width: 1600px;
  height: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  flex-wrap: wrap;

  border-radius: 5% 5% 5% 5%;

  @media screen and (max-width: 1210px) {
    width: 90%
  }
  @media screen and (max-width: 520px) {
    width: 80%;
  }
`;

const ContentContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  margin-bottom: 30px;
  position: relative;

  .description {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 1210px) {
      width: 100%;
    }
    @media screen and (max-width: 520px) {
      width: 100%;
    }
  }
  .description-visible {
    opacity: 1;
  }
  .desc2 {
    color: whitesmoke;
    margin-bottom: 20px;
  }
  &:hover {
    opacity: 1;
   
  }

  @media screen and (max-width: 1210px) {
    width: 100%;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  max-height: 1400px;
  display: flex;
  align-items: center;
  

  img {
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    cursor: pointer;

  }
  @media screen and (max-width: 1210px) {
    width: 100%;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
function Content() {
  const [category, setCateGory] = useState("전체");

  const menuList = ["전체", "클론코딩", "팀프로젝트", "미니 프로젝트"];
  const menuType = ["전체", "clone", "Team project", "mini project"];

  const [clickImg, setClickimg] = useState(null);
  

  
  const Contents = [
    {
      title: "Hello-vanilla",
      imgsrc: "images/img/contents/hello.png",
      desc: "팀 프로젝트",
      desc2: "개발 기간 30일, ",
      desc3: "기여도 20%",
      skills: "React, javascript, Redux, firebase",
      type: "Team project",
      git: "",
      orginal: "",
    },
    {
      title: "portpolio",
      imgsrc: "images/img/contents/portpolio.png",
      desc: "포트폴리오",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "React, javascript, Redux",
      type: "mini project",
      git: "",
      orginal: "",
    },
    {
      title: "서브웨이 클론코딩",
      imgsrc: "images/img/contents/subway.png",
      desc: "클론 코딩",
      desc2: "개발 기간 10일, ",
      desc3: "기여도 100%",
      skills: "html, css",
      type: "clone",
      git: "",
      orginal: "",
    },
    {
      title: "html,css,JS 퀴즈.",
      imgsrc: "images/img/contents/quiz.png",
      desc: "프로젝트",
      desc2: "개발 기간 6일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
      type: "mini project",
      git: "",
      orginal: "",
    },
    {
      title: "대구은행 메인",
      imgsrc: "images/img/contents/DGB.png",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
      type: "clone",
      git: "",
      orginal: "",
    },
    {
      title: "대구은행 메인",
      imgsrc: "images/img/contents/DGB.png",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
      type: "clone",
      git: "",
      orginal: "",
    },
  ];

  const FliterData =
    Contents &&
    Contents.filter((e) => {
      return category === "전체" || category === e.type;
    });

    const ActiveClick = (i) => {
      if(clickImg === i) {
        setClickimg(null);
      }else{
        setClickimg(i)

      }
    }
  return (
    <>
    <Element className="ContentTop" />
      <Content_Wrap>
        <h1 className="">Contents</h1>
      </Content_Wrap>

      <Content_type_wrap>
        {menuList.map((el, ind) => {
          return (
            <li
              onClick={() => {
                setCateGory(menuType[ind]);
              }}
              key={ind}
            >
              {el}
            </li>
          );
        })}
      </Content_type_wrap>

      <ContentSkills>
        {Contents.filter((e) => category === "전체" || category === e.type).map(
          (e, i) => {
            return (
              <ContentContainer key={i} onClick={()=>{ActiveClick(i)}}>
                <ImgWrap>
                  <img src={e.imgsrc} alt={e.title} />
                </ImgWrap>
                <div className={`description ${clickImg === i ? "description-visible" : ""}`}>
                  {e.title}
                  {e.desc}
                  {e.desc2}
                  {e.desc3}
                  {e.skills}
                </div>
              </ContentContainer>
            );
          }
        )}
      </ContentSkills>
    </>
  );
}

export default Content;
