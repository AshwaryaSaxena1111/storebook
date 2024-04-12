import React from "react";
import { FormControl, InputLabel } from "@mui/material";
import BasicTextFields from "./Inputfield";
import { ArgTypes } from "@storybook/blocks";
import UserPhoto from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7tkgZheawICwC8p1NlMi0TIrYryF2mnbn8qiOibU8A&s";
import { type } from "@testing-library/user-event/dist/type";
import userEvent from "@testing-library/user-event";

export default {
  title: "atoms/InputField",
  component: BasicTextFields,
  ArgTypes: {
    icon: {
      control: "select",
      options: [
       {UserPhoto}
      ],
    },
    type: {
      control: "select",
      options: [
        "password","text","number","email","tel"
      ]
    }
  },
};

const Template = (args) => (
  <FormControl>
    <InputLabel>{args.placeholder} {args.label} {args.icon} {args.type}</InputLabel>
    <BasicTextFields {...args} />
  </FormControl>
);

export const InputField = Template.bind({});
InputField.args = {
  label: "Username",
  placeholder: "Enter your name",
  icon: {},
  type: "text",
};
