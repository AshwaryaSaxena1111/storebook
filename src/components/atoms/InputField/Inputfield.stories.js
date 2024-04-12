import React from "react";
import { FormControl, InputLabel } from "@mui/material";
import BasicTextFields from "./Inputfield";

export default {
  title: "atoms/InputField",
  component: BasicTextFields,
};

const Template = (args) => (
  <FormControl>
    <InputLabel>{args.label}</InputLabel>
    <BasicTextFields {...args} />
  </FormControl>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Username",
};
