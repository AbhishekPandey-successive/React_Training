import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal1 from './Modal1';


test('Presence of Toggle Button Tested SucceFully', () => {
    render(<Modal1 />);
    const toggleButton = screen.getByText('Toggle the Modal Dialog'); 
    expect(toggleButton).toBeInTheDocument();
  });


  test('Closeing of Dialog Box tested Successfully', () => {
    render(<Modal1 />);
    const closeDialog= screen.getByText('Dialog Box Closed'); 
    expect(closeDialog).toBeInTheDocument();
  });



  test('Opening of Dialog Box tested Successfully', () => {
    render(<Modal1 />);
    const Toggle= screen.getByText('Toggle Dialog Box'); 
    fireEvent.click(Toggle)
    const value=screen.getByText("Dialog Box Open")
    expect(value).toBeInTheDocument();
  });



  