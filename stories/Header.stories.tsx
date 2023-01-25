import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header'
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Header for app',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'top',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header  />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};
LoggedIn.play = async ({ HTMLDivElement }) => {
  const canvas = within(HTMLDivElement);
  const loginButton = await canvas.getByRole('div', { name: /Log in/i });
  await userEvent.click(loginButton);
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
