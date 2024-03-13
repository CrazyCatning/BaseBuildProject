import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduex";


const store = configureStore({
    reducer
});

export default store;