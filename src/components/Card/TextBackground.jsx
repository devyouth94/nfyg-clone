import React from "react";
import text_life from "static/icon/text_life.svg";
import text_movie from "static/icon/text_movie.svg";
import text_talk from "static/icon/text_talk.svg";
import text_ego from "static/icon/text_ego.svg";
import text_write from "static/icon/text_write.svg";
import text_music from "static/icon/text_music.svg";
import text_love from "static/icon/text_love.svg";
import text_work from "static/icon/text_work.svg";
import styled from "styled-components";

const TextBackground = ({ category }) => {
  switch (category) {
    case "라이프스타일":
      return <STextImage src={text_life} alt="text_life" />;
    case "영화와 넷플릭스":
      return <STextImage src={text_movie} alt="text_movie" />;
    case "사유의 확장":
      return <STextImage src={text_talk} alt="text_talk" />;
    case "자아와 관계":
      return <STextImage src={text_ego} alt="text_ego" />;
    case "글쓰기":
      return <STextImage src={text_write} alt="text_write" />;
    case "음악과 OST":
      return <STextImage src={text_music} alt="text_music" />;
    case "사랑과 연애":
      return <STextImage src={text_love} alt="text_love" />;
    case "일과 커리어":
      return <STextImage src={text_work} alt="text_work" />;
    default:
      break;
  }
};

const STextImage = styled.img`
  position: absolute;
  top: 1rem;

  width: 100%;
`;

export default TextBackground;
