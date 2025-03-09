import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';


// Import all stories and the component annotations from the stories file
import * as stories from '../stories/Button.stories';

const { Red, Green } = composeStories(stories);

describe('Button Component', () => {

  test('renders red button', () => {
    render(<Red />);
    const buttonElement = screen.getByText('Red Button');
    expect(buttonElement).not.toBeNull();
  });

  test('renders green button', () => {
    render(<Green />);
    const buttonElement = screen.getByText('Green Button');
    expect(buttonElement).not.toBeNull();
  });
});