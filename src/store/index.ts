import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { Country } from 'types/country';

const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country, void>({
      query: () => `all`,
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
