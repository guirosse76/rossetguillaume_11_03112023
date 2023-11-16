import { configureStore } from "@reduxjs/toolkit";
// import firstNameReducer from "./features/User/firstName";
// import lastNameReducer from "./features/User/lastName";
// import tokenReducer from "./features/Token/token";
import userReducer from "./features/user";

export const store = configureStore({
  reducer: {
    // firstName: firstNameReducer,
    // lastName: lastNameReducer,
    // token: tokenReducer,
    user: userReducer,
  },
});
