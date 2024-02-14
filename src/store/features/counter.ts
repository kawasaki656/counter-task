import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
		setCount(state, action: PayloadAction<number>) {
			state.count = action.payload;
		}
	}
});

export const { setCount } = counterSlice.actions;

export default counterSlice.reducer
