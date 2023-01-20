import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

// redux eto state obrabot4ik dlja raznih bibliotek.
// osnovi redux o4enj shozhi s react state.
// Kak i u useState u redux estj iznachalnoe sostojanie i funkcija dlja izmenenija sostojanija

const initialState = {
  showSearchBar: false,
  searchParams: {
    lat: 59.4370,
    lon: 24.7536,
    units: 'metric',
    lang: 'en',
    city: 'Tallinn',
  },
  forecastSelectedData: null,
  errorMessage: null,
};


// Funkcii izmenenija sostojanija v redux nazivajutsja 'Action';
// Action sozdaet object v kotorom estj ego tip i object payload v kotorom budut hranitsja novie dannie 
export const setSearchParams = createAction('setSearchParams');
export const setShowSearchBar = createAction('setShowSearchBar');
export const setForecastSelectedData = createAction('setForecastSelectedData');
export const setErrorMessage = createAction('setErrorMessage');

// reducer ispolzuetsja dlja opredelenija chto budet delatj 'Action'
// Mi sozdaem funkcii s nazvaniem Actiona i v kotorih opisivaem 4to proizoidet
// V nashem slu4ae mi menjajem sostojanie.
const reducer = createReducer(initialState, {
  [setSearchParams]: (iState, action) => {
    iState.searchParams = action.payload;
  },
  [setShowSearchBar]: (iState, action) => {
    iState.showSearchBar = action.payload;
  },
  [setForecastSelectedData]: (iState, action) => {
    iState.forecastSelectedData = action.payload;
  },
  [setErrorMessage]: (iState, action) => {
    iState.errorMessage = action.payload;
  },
});

//store eto oblako gde hranitsja vsja informacija o sostojanii.
export const store = configureStore({ reducer });

