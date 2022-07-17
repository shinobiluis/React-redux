// importamos createStore de redux
import { createStore } from "redux";
// mandamos a llamar el reducer que creamos
// en la carpeta reducers
import reducer from "../reducers";
// creamos el reducer
const store = createStore( reducer );

store.subscribe(()=>console.log( store ));

export default store;