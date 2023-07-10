import { createSlice } from '@reduxjs/toolkit';
import { InternalMedicineType } from '../../utils/type';

interface InitState {
  info: {
    internalMedicineDetail?: InternalMedicineType;
  };
}

const initialState: InitState = {
  info: {
    internalMedicineDetail: undefined,
  },
};

const internalMedicineSlice = createSlice({
  initialState,
  reducers: {
    setInfo: (state, action: any) => {
      state.info.internalMedicineDetail = action.payload;
    },
  },
  name: 'internalMedicine',
  extraReducers: (builder) => {},
});

const internalMedicineReducer = internalMedicineSlice.reducer;
const { setInfo } = internalMedicineSlice.actions;
export { internalMedicineReducer, setInfo };
