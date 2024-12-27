import axios from 'axios';

export const getOwnedBuses = async () => {
  try {
    const response = await axios.get('/api/bus-owner/owned-buses');
    return response.data;
  } catch (error) {
    console.error('Error fetching owned buses:', error);
    return error;
  }
};

export const registerBus = async (busData) => {
  try {
    const response = await axios.post('/api/bus-owner/register-bus', busData);
    return response.data;
  } catch (error) {
    console.error('Error registering bus:', error);
    return error;
  }
};

export const updateBus = async (busData) => {
  try {
    const response = await axios.put('/api/bus-owner/update-bus', busData);
    return response.data;
  } catch (error) {
    console.error('Error updating bus:', error);
    return error;
  }
};

export const getPassengers = async (busId) => {
  try {
    const response = await axios.get(`/api/bus-owner/passengers/${busId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching passengers:', error);
    return error;
  }
};

export const removePassenger = async (passengerId, busId) => {
  try {
    const response = await axios.delete(
      `/api/bus-owner/remove-passenger/${passengerId}/${busId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error removing passenger:', error);
    return error;
  }
};

export const updatePassenger = async (passengerData, busId) => {
  try {
    const response = await axios.put(
      `/api/bus-owner/update-passenger/${busId}`,
      passengerData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating passenger:', error);
    return error;
  }
};