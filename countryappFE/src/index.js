import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import CountryForm from './components/CountryForm';
import RBSTable from './components/RBSTable';
import RegistrationForm from './userComp/RegistrationForm';
import LoginForm from './userComp/LoginForm';
import UserPage from './userComp/UserPage';
import PageNotFound from './components/PageNotFound';
import store from './app/Store'
import { Provider } from 'react-redux'
import NameDemo from './InputDemo/NameDemo';
import MergeTable from './tableDemo/MergeTable'


ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/form" element={<CountryForm />} />
          {/* <Route path="/" element={<RBSTable />} /> */}
          {/* <Route path="pickytable" element={<PickyTable/>} /> */}
          <Route path="/" element={<UserPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* <Route path="/userpage" element={<UserPage/>}/> */}
          <Route
            path="userpage/:userId"
            element={<UserPage />}
          />
          <Route
            path="/userpage"
            element={<PageNotFound />}
          />
          <Route
            path="/namedemo"
            element={<NameDemo />}
          />
          <Route
            path="/tabledemo"
            element={<MergeTable />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();