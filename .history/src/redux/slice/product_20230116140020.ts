import { createSlice } from '@reduxjs/toolkit';
type InitialType = {
    countries: Country[];
    favorite: Country[];
  };
  
  const initialState: InitialType = {
    countries: [],
    favorite: [],
  };
  
  const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
      getCountryData: (state, acion) => {
        state.countries = acion.payload;
      }
    });

    export const countriesActions = countrySlice.actions;
    export default countrySlice.reducer;
    