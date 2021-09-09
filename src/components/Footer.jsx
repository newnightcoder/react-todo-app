import React from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 0;
  font-size: 0.7rem;
  background-color: rgb(253, 253, 253);
  color: gray;
  position: relative;
`;

const BtnWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2ebaee;
  background-color: deepskyblue;
  color: rgb(253, 253, 253);
  font-size: 3rem;
  font-weight: 300;
  z-index: 100;
  position: absolute;
  right: 25px;
  bottom: 35px;
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};

  &:hover {
    transform: scale(1.1);
    border-color: deepskyblue;
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
  }
`;

const Footer = ({ dark }) => (
  <AppFooter>
    {/* <IconButton
      type="submit"
      size="small"
    > */}
    <BtnWrapper dark={dark}>
      <span role="img" aria-label="test de">
        +
      </span>
    </BtnWrapper>
    {/* </IconButton> */}
    <div>
      Built with React by Nightcoder{" "}
      <span role="img" aria-label="sunglasses emoji">
        😎{" "}
      </span>
    </div>
  </AppFooter>
);

export default Footer;
