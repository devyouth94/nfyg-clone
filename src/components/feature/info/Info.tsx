import styled from "styled-components";

const Info = () => {
  return (
    <S.InfoContainer>
      <h1>정기모임</h1>
      <p>
        3개월 동안 네 번 만나는 정기 모임입니다.
        <br />
        12명의 새로운 사람들과 대화와 취향을 나눠요.
      </p>
    </S.InfoContainer>
  );
};

const S = {
  InfoContainer: styled.div`
    padding: 3rem 2rem 0 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      margin-top: 2rem;

      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  `,
};

export default Info;
