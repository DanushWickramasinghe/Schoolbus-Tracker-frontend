import axios from "axios";
import Host from "../configs/server";

export const getBusOwnerData = async () => {
  try {
    const response = await axios.get(`${Host}/api/user/bus-owner-data`);
    return response.data.busOwnerDetails;
  } catch (error) {
    console.error("Error fetching bus owner data:", error);
    return error;
  }
};

export const getPassengerData = async () => {
  try {
    const response = await axios.get(`${Host}/api/user/passenger-data`);
    return response.data.passengerDetails;
  } catch (error) {
    console.error("Error fetching passenger data:", error);
    return error;
  }
};

export const getDashboardData = async () => {
  try {
    const response = await axios.get("/api/dashboard-data");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return error;
  }
};
