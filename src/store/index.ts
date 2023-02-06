import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { Country } from 'types/country';
import themeSlice from './themeSlice';

const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountries: builder.query<Array<Country>, void>({
      query: () => `all`,
      providesTags: ['Countries'],
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
