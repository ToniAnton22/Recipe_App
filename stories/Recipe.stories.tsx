import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Recipe from '../components/Recipe';
import { QueryClient, QueryClientProvider } from 'react-query';

export default {
  title: 'Recipe Page',
  component: Recipe,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Recipe>;

const queryClient = new QueryClient()

const Template: ComponentStory<typeof Recipe> = (args) =>
<QueryClientProvider client={queryClient}> <Recipe {...args}/> </QueryClientProvider>;


export const Default= Template.bind({});



// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
