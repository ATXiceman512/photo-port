import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // Baseline test
  test("Nav Renders", () => {
    render(<Nav />);
  })

  // Snapshot test
  test("Matches Snapshot", () => {
    const { asFragment } = render(<Nav />);
    // asset value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  test('Inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  })
})

describe('links are visible', () => {
  test('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
})