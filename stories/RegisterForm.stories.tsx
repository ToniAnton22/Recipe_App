import {ComponentMeta, ComponentStory} from "@storybook/react";
import RegisterForm from "../components/RegisterForm";

export default {
  title: "Register Form",
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const Primary = Template.bind({});