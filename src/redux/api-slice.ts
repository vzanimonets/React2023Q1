import { createApi } from '@reduxjs/toolkit/query/react';
import { RequestType } from '../components/App/App';
import { DetailsType } from '../components/DetailsModal/DetailsModal';
import { axiosBaseQuery } from './axios-base-query';

// interface Api {
//   id: string;
//   name: string;
//   image: {
//     url: string;
//   };
// }
interface findAllArgs {
  query?: string;
  fields?: string;
  limit?: number;
}
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints(builder) {
    return {
      findAll: builder.query<RequestType, findAllArgs>({
        query: ({ query, fields = undefined, limit = 10 }) => ({
          url: '/users/search',
          method: 'GET',
          params: {
            q: query,
            fields: fields,
            limit: limit,
          },
        }),
      }),
      getOne: builder.query<DetailsType, string>({
        query: (id: string) => ({
          url: `/users/${id}`,
          method: 'GET',
        }),
      }),
    };
  },
});
export const { useFindAllQuery, useGetOneQuery } = apiSlice;
