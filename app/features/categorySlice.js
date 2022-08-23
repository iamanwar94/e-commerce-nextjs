const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: null,
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default categorySlice.reducer;
export const selectCategory = (state) => state.category.data;

// Thunks
export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const res = await fetch("https://ashley-api.herokuapp.com/categories");
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}categories`);
  const data = await res.json();
  return data;
});

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
