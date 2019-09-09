import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  // console.tron.log('Hello Baiana');

  return (
    <>
      <StatusBar backgroundColor="#593f62" barStyle="light-content" />
      <Routes />
    </>
  );
}
