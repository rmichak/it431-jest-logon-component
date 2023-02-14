import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileComponent from './UserProfileComponent';

describe('The User Profile Component', () => {
    test('displays an error message if first name blank', () => {
        render(<UserProfileComponent />);

        // const firstNameInput = screen.getByLabelText('First Name*');
        // fireEvent.change(firstNameInput, { target: { value: '' } });

        // const submitButton = screen.getByText('Update');
        // fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/First Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('displays an error message if last name blank', () => {
        render(<UserProfileComponent />);

        const errorMessage = screen.getByText(/Last Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });

});
