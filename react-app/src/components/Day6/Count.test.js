import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Count from "./Count";


test('Presense of Increement Button is Tested Successfully', () => {
    render(<Count />);
    const incrementButton = screen.getByText('Increement');
    expect(incrementButton).toBeInTheDocument();
  });


  test('Presense of Decreement  Button is Tested Successfully', () => {
    render(<Count />);
    const decrementButton = screen.getByText('Decreement');
    expect(decrementButton).toBeInTheDocument();
  });



  test('Testing of Incrementing the value is done successfully', () => {
    render(<Count />);
    const incrementButton = screen.getByText('Increement');
    fireEvent.click(incrementButton)
    const value=screen.getByText('count:1')
    expect(value).toBeInTheDocument();
  });



  test('Testing of Decrementing the value is done successfully', () => {
    render(<Count />);
    const decrementButton = screen.getByText('Increement');
    fireEvent.click(decrementButton)
    const value=screen.getByText('count:1')
    expect(value).toBeInTheDocument();
  });