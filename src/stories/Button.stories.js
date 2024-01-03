import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}; //our story

//making our stories interactable on storybook
const Template = (arg) => <Button {...arg} />; //created a function that returns are button and passes all the args through it

//what are differient stories are. ie. large med small icons

export const Small = Template.bind({}); //copies the template function
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Medium = Template.bind({}); //copies the template function
Medium.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Large = Template.bind({}); //copies the template function
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};
