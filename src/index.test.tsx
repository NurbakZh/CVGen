import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

describe('App', () => {
    it('renders Main page correctly', () => {
        render(<Main />);
        const mainPageElement = screen.getByText(/Main Page/i);
        expect(mainPageElement).toBeInTheDocument();
    });

    it('renders Login page correctly', () => {
        render(<Login />);
        const loginPageElement = screen.getByText(/Login Page/i);
        expect(loginPageElement).toBeInTheDocument();
    });

    it('renders Register page correctly', () => {
        render(<Register />);
        const registerPageElement = screen.getByText(/Register Page/i);
        expect(registerPageElement).toBeInTheDocument();
    });
});
