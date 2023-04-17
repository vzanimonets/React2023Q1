import { ItemType } from '../components/App/App';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormItemsState {
  items: ItemType[];
}

const initialState: FormItemsState = {
  items: [],
};

const formSlice = createSlice({
  name: 'form-data',
  initialState,
  reducers: {
    add(state, action: PayloadAction<ItemType>) {
      state.items.push(action.payload);
    },
  },
});

export const { add } = formSlice.actions;
export default formSlice.reducer;
