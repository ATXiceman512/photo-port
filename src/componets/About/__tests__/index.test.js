import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // First Test
  test('Page Rendered Successfully', () => {
    render(<About />);
  });

  // Second Test
  test('Matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})



