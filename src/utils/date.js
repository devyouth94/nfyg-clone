const convertDate = (startDate) => {
  const newDate = new Date(startDate);
  const weekArr = "일월화수목금토".split("");

  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const dayOfWeek = weekArr[newDate.getDay()];

  return `${month}월 ${date}일 · ${dayOfWeek}요일`;
};

const displayTime = (value) => {
  const milliSeconds = new Date() - new Date(value);

  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

const isPast = (startDate) => {
  const milliSeconds = new Date() - new Date(startDate);

  return milliSeconds > 0;
};

export { convertDate, displayTime, isPast };
