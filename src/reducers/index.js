import { combineReducers } from "redux";
// agregamos nuestro reducer
import contadorReducer from "./contadorReducer";

const reducer = combineReducers({
    contador: contadorReducer
});

export default reducer;