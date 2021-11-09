import React from "react";
import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons";
import {
  BottomRowContainer,
  Input,
  Label,
  Moon,
  Sun,
  ToggleContainer,
  ToggleDiv,
} from "../Header/styles";
import DateAndTime from "./DateTime/DateAndTime";

const BottomRow = ({ toggleDarkMode, isToggled }) => {
  return (
    <BottomRowContainer>
      <DateAndTime />
      <ToggleContainer>
        <Label htmlFor="checkbox" onClick={toggleDarkMode}>
          <Sun>
            <BrightnessHighFill color="#333" />
          </Sun>
          <Moon>
            <MoonFill color="#333" size={15} />
          </Moon>
          <ToggleDiv isToggled={isToggled} onClick={toggleDarkMode} />
        </Label>
        <Input type="checkbox" id="checkbox" />
      </ToggleContainer>
    </BottomRowContainer>
  );
};

export default BottomRow;
