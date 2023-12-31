import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const FooterWrap = styled.div`
  z-index: 50;
  width: 100%;
  bottom: 0;
  position: fixed;
  border-top: 1px solid black;
  /* 하단 고정 해야함. */
`;
const TextWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  padding-right: 10%;
  align-items: end;
  flex-direction: column;
  p {
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
    font-size: 20px;
  }
`;

function Footer() {
  const [commit, setCommit] = useState("");
  const repo = "KiBeomSeok940613/react-portpolio";

  const theme = useSelector(state => state.dark)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/repos/${repo}/commits`);
      const data = await res.json();
      const lastCommit = data[0];
      console.log(lastCommit.commit.committer.date);
      setCommit(lastCommit.commit.committer.date);
    };
    fetchData();
  }, []);
  const date = new Date(commit);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const formatDate = `${year}-${month}-${day}`;

  return (
    <FooterWrap>
      <TextWrap  $isdark={theme} 
>
        {/* <a id="chat-channel-button" href="javascript:chatChannel()">
  <img src="/tool/resource/static/img/button/channel/consult/consult_small_yellow_pc.png"
    alt="카카오톡 채널 채팅하기 버튼" />
</a> */}
        <p>LAST : commit {formatDate}</p>

        <p>Copyright 2023. 기범석 all rights reserved.</p>
      </TextWrap>
    </FooterWrap>
  );
}

export default Footer;
