import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider} from "antd";
import ThemeContextProvider from "./context/ThemeContextProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider
      componentSize={"large"}
      theme={{
          token: {
              colorPrimary: '#c77cf6',
              colorBgContainer: '#d6a0f8',
              colorBgBase: '#b86ad5',
              colorBorder: '#b86ad5'
          },
      }}
  >
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
  </ConfigProvider>
);


