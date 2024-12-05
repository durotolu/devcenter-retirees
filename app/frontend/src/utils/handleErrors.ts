export const handleApiError = (error: any): string => {
  if (error.response) {
    return error.response.data.message || 'An error occurred';
  }
  return 'Network error. Please try again later.';
};
