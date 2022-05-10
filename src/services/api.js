import axios from 'axios';

export async function getTransactions() {
  const token = localStorage.getItem('access_token');

  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}api/account/transactions`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function getCountTransactions() {
  const token = localStorage.getItem('access_token');

  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}api/account/transactions/count`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function login(data) {
  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
      data,
    });

    return response;
  } catch (err) {
    return { status: err.response.status, data: err.response.data };
  }
}

export async function signUp(data) {
  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}api/auth/register`,
      data,
    });

    return response;
  } catch (err) {
    return { status: 400, data: err };
  }
}

export async function addNewPurchase(data) {
  const token = localStorage.getItem('access_token');

  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}api/account/purchase`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function addNewDeposit(data) {
  const token = localStorage.getItem('access_token');

  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}api/account/deposit`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function getDepositsPendings() {
  const token = localStorage.getItem('access_token');

  try {
    const response = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}api/account/deposit/pending`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function getDeposits() {
  const token = localStorage.getItem('access_token');

  try {
    const response = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}api/account/deposits`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}

export async function updateDepositCheck(id, decision) {
  const token = localStorage.getItem('access_token');

  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}api/account/deposit/change`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        decision,
        id,
      },
    });

    return response;
  } catch (err) {
    if (err.response.status === 403) return (window.location.href = '/login');

    return { status: err.response.status, data: err.response.data };
  }
}
