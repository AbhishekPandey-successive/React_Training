import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserProfile from './UserProfile';


test('Presence of name ', () => {
    render(<UserProfile />);
    const name = screen.getByText('name:Abhishek Pandey');
    expect(name).toBeInTheDocument();
  });


  test('Presence of email', () => {
    render(<UserProfile />);
    const email = screen.getByText('email:abhi123@.com');
   expect(email).toBeInTheDocument();
  });

  test('Presence of Phone', () => {
    render(<UserProfile />);
    const phone = screen.getByText('phone:123456789');
    expect(phone).toBeInTheDocument();
  });
