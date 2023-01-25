import {ComponentMeta, ComponentStory} from "@storybook/react";
import LoginForm from "../components/LoginForm";


const Template: React.FC<{ email: string; password: string;}> = () => {
    return <LoginForm/>;
}

export default {
    title: "LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
}

export const Primary = Template.bind({})
