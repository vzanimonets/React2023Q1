import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  value: string | undefined;
}

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string | undefined>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;
