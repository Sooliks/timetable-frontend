import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider} from "antd";
import ConfigContextProvider from "./context/ConfigContextProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider
      componentSize={"large"}
      theme={{
          token: {
              colorPrimary: '#8335b4',
              colorBgContainer: '#c37afc',
              colorBgBase: '#b86ad5',
              colorBorder: '#a528d2'
          },
      }}
  >
      <ConfigContextProvider>
        <App/>
      </ConfigContextProvider>
  </ConfigProvider>
);


