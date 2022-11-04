import { COLOR, COLOR_BRIGHT, MAIN_COLOR } from "styles/colorPalette";

const categoryArr = [
  { name: "전체", color: MAIN_COLOR.black, lightColor: MAIN_COLOR.black },
  { name: "라이프스타일", color: COLOR.Lifestyle, lightColor: COLOR_BRIGHT.Lifestyle },
  { name: "영화와 넷플릭스", color: COLOR.Movie, lightColor: COLOR_BRIGHT.Movie },
  { name: "사유의 확장", color: COLOR.Philosophy, lightColor: COLOR_BRIGHT.Philosophy },
  { name: "자아와 관계", color: COLOR.Relationship, lightColor: COLOR_BRIGHT.Relationship },
  { name: "글쓰기", color: COLOR.Writing, lightColor: COLOR_BRIGHT.Writing },
  { name: "음악과 OST", color: COLOR.Music, lightColor: COLOR_BRIGHT.Music },
  { name: "사랑과 연애", color: COLOR.Love, lightColor: COLOR_BRIGHT.Love },
  { name: "일과 커리어", color: COLOR.Career, lightColor: COLOR_BRIGHT.Career },
];

const dayArr = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

const regionArr = [
  "강남",
  "건대",
  "구의",
  "낙성대",
  "대학로",
  "분당/서현",
  "사당",
  "삼성",
  "서울대입구",
  "선정릉",
  "신림",
  "안국",
  "을지로",
  "잠실",
  "합정",
  "홍대",
];

export { categoryArr, dayArr, regionArr };
