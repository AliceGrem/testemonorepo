import { api } from '@monorepo/utils';

export const getListVehicles = async (vehicleId, token) => {
  try {
    const data = await api.getVehicles(vehicleId, token);
    return data;
  } catch (error) {
    console.error(error);
  }
};
