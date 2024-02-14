import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Counter } from '../../../../../src/components/UI/Counter/Counter';
import { store } from '../../../../../src/store';

describe('Counter', () => {
  it('should render successfully', () => {
    const { root } = render(<Provider store={store}><Counter /></Provider>);
    expect(root).toBeTruthy();
  });

  it('correct logic work', () => {
    const { getByTestId } = render(<Provider store={store}><Counter /></Provider>);
    
    
    const result = getByTestId('result');
    const incrementBtn = getByTestId('increment');
    const decrementBtn = getByTestId('decrement');
    
    fireEvent.press(incrementBtn);
    expect(result.children[0]).toBe("1");

    fireEvent.press(incrementBtn);
    expect(result.children[0]).toBe("2");

    fireEvent.press(decrementBtn);
    expect(result.children[0]).toBe("1");

    fireEvent.press(decrementBtn);
    expect(result.children[0]).toBe("0");
  
    fireEvent.press(decrementBtn);
    expect(result.children[0]).toBe("-1");

    fireEvent.press(incrementBtn);
    expect(result.children[0]).toBe("0");
  });
});
