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