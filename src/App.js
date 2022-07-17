
import TeoriaRedux from "./components/TeoriaRedux";
// agregamos el provider de reac-redux
import { Provider } from "react-redux";
// agregamos es store creado
import store from "./store";

function App() {
  return (
    // hacemos que proyecto contega ya el store
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
