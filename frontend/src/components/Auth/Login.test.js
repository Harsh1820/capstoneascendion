import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { loginUser } from '../../store/actions/authActions';

const mockStore = configureStore([]);
const store = mockStore({
  auth: {
    token: null,
    error: null,
    loading: false,
  },
});

jest.mock('../../store/actions/authActions', () => ({
  loginUser: jest.fn(),
}));

describe('Login Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });

  test('renders login form', () => {
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('validates form inputs', async () => {
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
  });

  test('submits the form', async () => {
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(loginUser).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
  });

  test('displays error message', async () => {
    store.getState = jest.fn(() => ({
      auth: {
        token: null,
        error: 'Invalid credentials',
        loading: false,
      },
    }));

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
  });

  test('displays loading state', () => {
    store.getState = jest.fn(() => ({
      auth: {
        token: null,
        error: null,
        loading: true,
      },
    }));

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(screen.getByRole('button', { name: /login/i })).toContainHTML('<svg'); // Checks for CircularProgress
  });
});
