import apiClient from './apiClient';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data; // Includes token or user data
  } catch (error: any) {
    throw error.response?.data || 'Login failed';
  }
};

export const registerUser = async (rsaPin: string, surname: string, email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/register', {
      rsaPin,
      surname,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Registration failed';
  }
};
