import styled from "styled-components";

const DateTime = styled.div`
  width: max-content;
  height: 20px;
  margin-left: 22px;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid yellow;
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
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  width: max-content;
  padding: 0 3px;
`;

export { DateTime, Today, Time, Span };
