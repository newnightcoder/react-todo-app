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

const Footer = ({ dark }) => (
  <AppFooter>
    {/* <IconButton
      type="submit"
      size="small"
    > */}

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
