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
import { COLOR } from "styles/colorPalette";

const Imoji = ({ category, include }) => {
  switch (category) {
    case "전체":
      return <TagAll color={include ? "#fff" : "#000"} />;
    case "라이프스타일":
      return <TagLifestyle color={include ? "#fff" : COLOR.Lifestyle} />;
    case "영화와 넷플릭스":
      return <TagMovie color={include ? "#fff" : COLOR.Movie} />;
    case "사유의 확장":
      return <TagPhilosophy color={include ? "#fff" : COLOR.Philosophy} />;
    case "자아와 관계":
      return <TagRelationship color={include ? "#fff" : COLOR.Relationship} />;
    case "글쓰기":
      return <TagWriting color={include ? "#fff" : COLOR.Writing} />;
    case "음악과 OST":
      return <TagMusic color={include ? "#fff" : COLOR.Music} />;
    case "사랑과 연애":
      return <TagLove color={include ? "#fff" : COLOR.Love} />;
    case "일과 커리어":
      return <TagCareer color={include ? "#fff" : COLOR.Career} />;
    default:
      break;
  }
};

export default Imoji;
