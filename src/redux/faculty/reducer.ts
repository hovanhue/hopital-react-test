import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    facultyType: null,
    // facultyType: '',
  },
};

const facultySlice = createSlice({
  initialState,
  reducers: {
    setType: (state, action: any) => {
      state.info.facultyType = action.payload;
    },
  },
  name: 'faculty',
  extraReducers: (builder) => {},
});

const facultyReducer = facultySlice.reducer;
const { setType } = facultySlice.actions;
export { facultyReducer, setType };
