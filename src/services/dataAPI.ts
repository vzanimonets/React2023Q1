import { api } from './configs/axiosConfigs';
import { RequestType } from '../components/App/App';

export const DataAPI = {
  getAll: async ({ limit = 9, fields = '' }): Promise<RequestType> => {
    const res = await api.request({
      url: `/users`,
      params: {
        select: fields,
        limit: limit,
      },
    });
    return res.data;
  },
};
