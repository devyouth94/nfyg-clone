import React from "react";
import {
  TagAll,
  TagCareer,
  TagLifestyle,
  TagLove,
  TagMovie,
  TagMusic,
  TagPhilosophy,
  TagRelationship,
  TagWriting,
} from "static/icon/TagIcons";
import { COLOR, MAIN_COLOR } from "styles/colorPalette";

const Imoji = ({ category, include }) => {
  switch (category) {
    case "전체":
      return <TagAll color={include ? MAIN_COLOR.white : MAIN_COLOR.black} />;
    case "라이프스타일":
      return <TagLifestyle color={include ? MAIN_COLOR.white : COLOR.Lifestyle} />;
    case "영화와 넷플릭스":
      return <TagMovie color={include ? MAIN_COLOR.white : COLOR.Movie} />;
    case "사유의 확장":
      return <TagPhilosophy color={include ? MAIN_COLOR.white : COLOR.Philosophy} />;
    case "자아와 관계":
      return <TagRelationship color={include ? MAIN_COLOR.white : COLOR.Relationship} />;
    case "글쓰기":
      return <TagWriting color={include ? MAIN_COLOR.white : COLOR.Writing} />;
    case "음악과 OST":
      return <TagMusic color={include ? MAIN_COLOR.white : COLOR.Music} />;
    case "사랑과 연애":
      return <TagLove color={include ? MAIN_COLOR.white : COLOR.Love} />;
    case "일과 커리어":
      return <TagCareer color={include ? MAIN_COLOR.white : COLOR.Career} />;
    default:
      break;
  }
};

export default Imoji;
