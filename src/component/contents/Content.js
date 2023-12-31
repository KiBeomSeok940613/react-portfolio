import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";


// content 시작
const Contentsbody = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
  color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
  padding-top: 100px;
`;

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
  width: 100%;
  display: flex;
  justify-content: start;
  animation: ${fadeIn} 2s ease-in-out forwards;
  padding-left: 5%;
  padding-bottom: 100px;
  box-sizing: border-box;
  text-decoration: underline;
`;
const Content_type_wrap = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  margin-bottom: 50px;
  @media screen and (max-width: 560px) {
    width: 100%;
    display: flex;
  }

  li {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 10px;
    transition: 0.5s; 
    border-bottom: 2px solid ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
    margin-top: 5px;
    &.active { 
      background-color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
      border-radius: 10px;
      border-bottom: 2px solid  ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
      font-weight: bold;
    }
    &:hover {    
      background-color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
      border-radius: 10px;
    }
  }
`;

const ContentSkills = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;

  border-radius: 5% 5% 5% 5%;

  @media screen and (max-width: 1210px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 85%;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
  margin-bottom: 100px;
  position: relative;
  &:hover .description {
    opacity: 1;
  }

  svg {
    font-size: 40px;
    cursor: pointer;
  }

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
    text-align: center;
    line-height: 2;
    a {
      img {
        width: 40px;
        height: 35px;
        margin-left: 30px;
        cursor: pointer;
      }
    }

    @media screen and (min-width: 560px) and (max-width: 780px) {
      width: 100%;
      line-height: 1.2;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      line-height: 1.5;
    }
  }
  /* .description-visible {
    opacity: 1;
  } */
  .desc2 {
    color: whitesmoke;
    margin-bottom: 20px;
  }
  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1210px) {
    width: 45%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  max-height: 700px;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  @media screen and (max-width: 1210px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
function Content() {
  const [category, setCateGory] = useState("전체");

  const menuList = ["ALL", "CLONE", "TEAM", "SIDE"];
  const menuType = ["전체", "clone", "Team project", "mini project"];
  const [isactive, setIsActive] = useState(0);

  const [clickImg, setClickimg] = useState(null);

  const Contents = [
    {
      title: "프로젝트 명 : Hello-vanilla",
      imgsrc: "images/img/contents/hello.png",
      desc: "팀 프로젝트",
      desc2: "개발 기간 30일, ",
      desc3: "기여도 20%",
      part: "회원가입 정보수정 로그인 ",
      skills: "React, javascript, Redux, firebase",
      type: "Team project",
      git: "https://github.com/the02196/hello_vanilla",
      vercel: "",
    },
    {
      title: "portpolio",
      imgsrc: "images/img/contents/portpolio.png",
      desc: "포트폴리오",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      part: "",
      skills: "React, javascript, styeld-componunt",
      type: "mini project",
      git: "https://github.com/KiBeomSeok940613/react-portpolio",
      vercel: "https://vercel.com/kibeomseok940613/portpolio",
    },
    {
      title: "서브웨이 클론코딩",
      imgsrc: "images/img/contents/subway.png",
      desc: "클론 코딩",
      desc2: "개발 기간 10일, ",
      desc3: "기여도 100%",
      part: "",
      skills: "html, css Swiper",
      type: "clone",
      git: "https://github.com/KiBeomSeok940613/subway",
      vercel: "",
    },
    {
      title: "html,css,JS 퀴즈.",
      imgsrc: "images/img/contents/quiz.png",
      desc: "프로젝트",
      desc2: "개발 기간 6일, ",
      desc3: "기여도 100%",
      part: " ",
      skills: "html, css, javascript",
      type: "mini project",
      git: "https://github.com/KiBeomSeok940613/quiz",
      vercel: "",
    },
    {
      title: "대구은행 메인",
      imgsrc: "images/img/contents/DGB.png",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      part: "",
      skills: "html, css, Swiper",
      type: "clone",
      git: "https://github.com/KiBeomSeok940613/dgb",
      vercel: "",
    },
    {
      title: "게시판",
      imgsrc: "images/img/contents/board.png",
      desc: "프로젝트",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 30%",
      part: "회원가입 정보수정 로그인 ",
      skills: "Next.js, Mysql",
      type: "mini project",
      git: "https://github.com/KiBeomSeok940613/mySQL",
      vercel: "images/img/contents/vercel.png",
    },
  ];

  // const FliterData =
  //   Contents &&
  //   Contents.filter((e) => {
  //     return category === "전체" || category === e.type;
  //   });

  const ActiveClick = (i) => {
    if (clickImg === i) {
      setClickimg(null);
    } else {
      setClickimg(i);
    }
  };
  const theme = useSelector(state => state.dark)
  const dispatch = useDispatch()
  return (
    <>
      <Element
       
        className="ContentSection"
      >
        <Fade duration={2000} left>
          <Contentsbody  $isdark={theme}>
            <Content_Wrap>
              <h1 className="">CONTENTS</h1>
            </Content_Wrap>

            <Content_type_wrap  $isdark={theme} >
              {menuList.map((el, ind) => {
                return (
                  <li
                    className={isactive === ind ? "active" : ""}
                    onClick={() => {
                      setCateGory(menuType[ind]);
                      setIsActive(ind);
                    }}
                    key={ind}
                  >
                    {el}
                  </li>
                );
              })}
            </Content_type_wrap>

            <ContentSkills>
              {Contents.filter(
                (e) => category === "전체" || category === e.type
              ).map((e, i) => {
                return (
                  <ContentContainer
                    key={i}
                    onClick={() => {
                      ActiveClick(i);
                    }}
                  >
                    <ImgWrap>
                      <img src={e.imgsrc} alt={e.title} />
                    </ImgWrap>
                    <div
                      className={`description ${
                        clickImg === i ? "description-visible" : ""
                      }`}
                    >
                      {e.title} <br />
                      {e.desc}
                      <br />
                      {e.desc2}
                      <br />
                      {e.desc3}
                      <br />
                      {e.part}
                      <br />
                      {e.skills}
                      <br />
                      <a href={e.git} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={faGithub}
                        >
                          {e.git}
                        </FontAwesomeIcon>
                      </a>
                    </div>
                  </ContentContainer>
                );
              })}
            </ContentSkills>
          </Contentsbody>
        </Fade>
      </Element>
    </>
  );
}

export default Content;
