import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MyForm from './MyForm'; 

test('fills username and password fields', () => {
  render(<MyForm />); 

  
  const usernameInput = screen.getByLabelText('Username:');
  const passwordInput = screen.getByLabelText('Password:');

  
  fireEvent.change(usernameInput, { target: { value: 'Abhishek Pandey' } });
  fireEvent.change(passwordInput, { target: { value: 'Jaibholenath@2' } });

  
  expect(usernameInput.value).toBe('Abhishek Pandey');
  expect(passwordInput.value).toBe('Jaibholenath@2');
});


