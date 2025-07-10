// API utility functions for HRMS frontend

const API_BASE_URL = 'http://localhost:3002/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Get auth headers
const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
      ...options
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API call failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication APIs
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  }),
  
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  }),
  
  forgotPassword: (email) => apiCall('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email })
  }),
  
  verifyOTP: (email, otp) => apiCall('/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ email, otp })
  }),
  
  resetPassword: (email, newPassword) => apiCall('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify({ email, newPassword })
  })
};

// Employee APIs
export const employeeAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/employees${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => apiCall(`/employees/${id}`),
  
  create: (employeeData) => apiCall('/employees', {
    method: 'POST',
    body: JSON.stringify(employeeData)
  }),
  
  update: (id, employeeData) => apiCall(`/employees/${id}`, {
    method: 'PUT',
    body: JSON.stringify(employeeData)
  }),
  
  delete: (id) => apiCall(`/employees/${id}`, {
    method: 'DELETE'
  }),
  
  getDepartments: () => apiCall('/employees/departments')
};

// Attendance APIs
export const attendanceAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/attendance${queryString ? `?${queryString}` : ''}`);
  },
  
  checkIn: (data) => apiCall('/attendance/checkin', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  
  checkOut: (data) => apiCall('/attendance/checkout', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  
  getStats: (period = 'today') => apiCall(`/attendance/stats?period=${period}`)
};

// Job APIs
export const jobAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/jobs${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => apiCall(`/jobs/${id}`),
  
  create: (jobData) => apiCall('/jobs', {
    method: 'POST',
    body: JSON.stringify(jobData)
  }),
  
  update: (id, jobData) => apiCall(`/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(jobData)
  }),
  
  delete: (id) => apiCall(`/jobs/${id}`, {
    method: 'DELETE'
  }),
  
  getStats: () => apiCall('/jobs/stats')
};

// Candidate APIs
export const candidateAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/candidates${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => apiCall(`/candidates/${id}`),
  
  create: (candidateData) => apiCall('/candidates', {
    method: 'POST',
    body: JSON.stringify(candidateData)
  }),
  
  updateStatus: (id, status, feedback) => apiCall(`/candidates/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status, feedback })
  }),
  
  scheduleInterview: (id, interviewData) => apiCall(`/candidates/${id}/interview`, {
    method: 'POST',
    body: JSON.stringify(interviewData)
  }),
  
  getStats: () => apiCall('/candidates/stats')
};

// Holiday APIs
export const holidayAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/holidays${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => apiCall(`/holidays/${id}`),
  
  create: (holidayData) => apiCall('/holidays', {
    method: 'POST',
    body: JSON.stringify(holidayData)
  }),
  
  update: (id, holidayData) => apiCall(`/holidays/${id}`, {
    method: 'PUT',
    body: JSON.stringify(holidayData)
  }),
  
  delete: (id) => apiCall(`/holidays/${id}`, {
    method: 'DELETE'
  }),
  
  getUpcoming: () => apiCall('/holidays/upcoming')
};

// Payroll APIs
export const payrollAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/payroll${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => apiCall(`/payroll/${id}`),
  
  create: (payrollData) => apiCall('/payroll', {
    method: 'POST',
    body: JSON.stringify(payrollData)
  }),
  
  updateStatus: (id, status) => apiCall(`/payroll/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  }),
  
  generateForAll: (month, year) => apiCall('/payroll/generate-all', {
    method: 'POST',
    body: JSON.stringify({ month, year })
  }),
  
  getStats: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/payroll/stats${queryString ? `?${queryString}` : ''}`);
  }
};

// Dashboard APIs
export const dashboardAPI = {
  getStats: () => apiCall('/dashboard/stats'),
  getHealth: () => apiCall('/health')
};

// Utility functions
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/';
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};