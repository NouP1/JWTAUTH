import React, { createContext,} from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import Store from './store/store';
let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


interface State {
  store: Store,
}

 export const store = new Store();


export const Context = createContext<State>({
  store,
})


root.render (
<React.StrictMode>

  <Context.Provider value={{
    store
  }}>
    <App />
  </Context.Provider>,
</React.StrictMode>,
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
);
