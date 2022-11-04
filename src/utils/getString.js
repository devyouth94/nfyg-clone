//배열 요소 사이에 ,를 붙여 문자열로 반환하는 함수
//[사과, 오렌지] => "사과,오렌지"

const getString = (arr) => {
  if (!arr.length) return;

  return arr.join(",");
};

export { getString };
