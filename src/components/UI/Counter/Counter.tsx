import React from 'react';
import { UseCounter } from "../../../hooks/useCounter";
import { PressableButton } from "../PressableButton/PressableButton";
import { Container } from "../../styled/Container";
import { TextElement } from "../../styled/TextElement";

export const Counter = () => {
	const {
		onIncrement, onDecrement, count,
	} = UseCounter();

  return (
    <Container>
      <PressableButton
        onPress={onDecrement}
        title="-1"
        testID="decrement"
      />
      <TextElement
        testID="result"
      >
        { count }
      </TextElement>
      <PressableButton
        onPress={onIncrement}
        title="+1"
        testID="increment"
      />
    </Container>
  )
}