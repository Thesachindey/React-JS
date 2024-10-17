# https://redux-toolkit.js.org/tutorials/quick-start
## 1st: create store folder "redux"
## 2nd: create store.js file;
### Add the service to your store;
         add: import { configureStore } from '@reduxjs/toolkit'

         export const store = configureStore({
         reducer: { },
         })

## 3rd: Wrap your application with the 'Provider' in main.jsx;
        <Provider store={store}>
             <App />
        </Provider>,
- also import "Provider & store"

## 4th: Create a Redux State Slice
- Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.
                            import { createSlice } from '@reduxjs/toolkit'

                             const initialState = {
                               value: 0,
                             }

                             export const counterSlice = createSlice({
                               name: 'counter',
                               initialState,
                               reducers: {
                                 increment: (state) => {
                                   state.value += 1
                                 },
                                 decrement: (state) => {
                                   state.value -= 1
                                 },
                                 incrementByAmount: (state, action) => {
                                   state.value += action.payload
                                 },
                               },
                             })

                             // Action creators are generated for each case reducer function
                             export const { increment, decrement, incrementByAmount } = counterSlice.actions

                             export default counterSlice.reducer