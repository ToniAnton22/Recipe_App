import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import CommentSection from '../components/CommentsSection';

export default {
  title: 'Comment Section',
  component: CommentSection,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CommentSection>;

const Template: ComponentStory<typeof CommentSection> = (args) => <CommentSection {...args} />;

export const Comment= Template.bind({});

