import { storiesOf } from "@storybook/react";
import RecipeShow from '../components/RecipeShow';
import React from 'react';


storiesOf('RecipeShow', module)
  .add('default', () => {
    const recipe = {
        name: 'Lasagne', 
        author: {
            name: 'Tom'
        },
        time_hours: 3,
        time_minutes: 69,
        dificulty: 'Hard',
    }
    const categories = [
        { name: 'Stir' },
        { name: 'Fry' }
    ]
   
    const steps = [
        { title: 'Step 1', content: 'Put pasta water on to boil. ..' },
        { title: 'Step 2', content: 'Brown the ground beef. ...' },
    ]

    const ingredients = [
        { amount: 500, unit: 'gr', ingredient: 'Beef' },
        { amount: 2, unit: 'units', ingredient: 'Pasta' },
        { amount: 50, unit: 'gr', ingredient: 'Tomatoes' }
    ]
    return <RecipeShow recipe={recipe} categories={categories} ingredients={ingredients} steps={steps}/>;
  });
