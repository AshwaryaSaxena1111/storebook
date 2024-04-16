import React from "react";
import { FormControl, InputLabel } from "@mui/material";
import BasicTextFields from "./Inputfield";
// import { argTypes } from "@storybook/blocks";

export default {
  title: "atoms/InputField",
  component: BasicTextFields,

  argTypes: {
    icon: {
      control: "select",
      options: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7tkgZheawICwC8p1NlMi0TIrYryF2mnbn8qiOibU8A&s",
        "https://www.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg",
        "	https://cdn.iconscout.com/icon/premium/png-256-thumb/at-the-rate-1984998-1678173.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KFx9N0xOQUDjMNxqtx6BlyPTJQ52ZPpbBg&s",
        "	https://icons.veryicon.com/png/o/miscellaneous/iconpack-01/confirm-password-1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNrTmN-oWsE6a6Jk34BRCvhCD9UkpUHE6KQ&s",
      ],
    },
    type: {
      control: "select",
      options: ["password", "text", "number", "email", "tel"],
    }
  },
};

const Template = (args) => (
  <FormControl>
    <InputLabel>
      <img src={args.icon} alt="Icon" style={{ width: 24, marginRight: 8 }} />{" "}
      {/* Render the icon */}
      {args.placeholder} {args.label} {args.type}
    </InputLabel>
    <BasicTextFields {...args} />
  </FormControl>
);


export const InputField = Template.bind({});
InputField.args = {
  label: "Username",
  icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7tkgZheawICwC8p1NlMi0TIrYryF2mnbn8qiOibU8A&s", // Image URL
  placeholder: "Enter your name",
  type: "text",
};

