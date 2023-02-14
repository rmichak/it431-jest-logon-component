import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogonComponent from './LogonComponent';

describe('The Logon Component', () => {
    test('displays an error message if password format is invalid', () => {
        render(<LogonComponent />);

        const usernameInput = screen.getByLabelText('Username:');
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });

        const passwordInput = screen.getByLabelText('Password:');
        fireEvent.change(passwordInput, { target: { value: 'password1' } });

        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Password must contain at least 1 upper case letter, 1 lower case letter, and be at least 8 characters long/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('does not display an error message if password format is valid', () => {
        render(<LogonComponent />);

        const usernameInput = screen.getByLabelText('Username:');
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });

        const passwordInput = screen.getByLabelText('Password:');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        const errorMessage = screen.queryByText(/Password must contain at least 1 upper case letter, 1 lower case letter, and be at least 8 characters long/i);
        expect(errorMessage).not.toBeInTheDocument();
    });
});
