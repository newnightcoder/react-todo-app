import styled from "styled-components";

const DateTime = styled.div`
  width: 50%;
  height: 3vh;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
  animation: appear 1000ms forwards;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Today = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) and (orientation: portrait) {
    padding-left: 5.5vw;
  }
`;

const Time = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5vw;
`;

export { DateTime, Today, Time };
