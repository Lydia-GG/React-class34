import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserDetailsForm from './2-UserDetailsForm';

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'Admin',
};
const changedUser = {
  firstName: 'Mary',
  lastName: 'Williams',
  role: 'User',
};

describe('UserDetailsForm', () => {
  it('Correctly fills in the initial values', () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    const inputElement1 = screen.getAllByRole('textbox')[0];
    const inputElement2 = screen.getAllByRole('textbox')[1];
    const inputElement3 = screen.getAllByRole('textbox')[2];

    expect(inputElement1.value).toBe('John');
    expect(inputElement2.value).toBe('Doe');
    expect(inputElement3.value).toBe('Admin');
  });

  it('Correctly changes a fields value', () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    const inputElement1 = screen.getAllByRole('textbox')[0];
    const inputElement2 = screen.getAllByRole('textbox')[1];
    const inputElement3 = screen.getAllByRole('textbox')[2];

    fireEvent.change(inputElement1, {
      target: { value: changedUser.firstName },
    });
    fireEvent.change(inputElement2, {
      target: { value: changedUser.lastName },
    });
    fireEvent.change(inputElement3, {
      target: { value: changedUser.role },
    });

    expect(inputElement1.value).toBe('Mary');
    expect(inputElement2.value).toBe('Williams');
    expect(inputElement3.value).toBe('User');
  });

  it('Submits the right values to the onSubmit function', () => {
    const onSubmit = jest.fn();
    render(
      <UserDetailsForm initialUserValues={changedUser} onSubmit={onSubmit} />
    );

    userEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenLastCalledWith({ ...changedUser });
  });
});
