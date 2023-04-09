import { api } from './configs/axiosConfigs';
import { RequestType } from '../components/App/App';
import { DetailsType } from '../components/DetailsModal/DetailsModal';

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
  getOne: async (id: string): Promise<DetailsType> => {
    const res = await api.request({
      url: `/users/${id}`,
    });
    return res.data;
  },
  findAll: async ({ query = '', limit = 9, fields = '' }): Promise<RequestType> => {
    const res = await api.request({
      url: `/users/search`,
      params: {
        q: query,
        select: fields,
        limit: limit,
      },
    });
    return res.data;
  },
};
