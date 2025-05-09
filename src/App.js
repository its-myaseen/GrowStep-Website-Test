import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import MainPage from './MainPage';

function App() {
  return (
    <NextUIProvider>
        <MainPage />
    </NextUIProvider>
   
  );
}

export default App;
