import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Wrapper } from './src/components/styled/Wrapper';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Counter } from './src/components/UI/Counter/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <StatusBar style="auto" />
        <Counter />
      </Wrapper>
    </Provider>
  );
};
