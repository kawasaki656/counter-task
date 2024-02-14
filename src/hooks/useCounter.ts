import { useAppDispatch, useAppSelector } from "../store";
import { setCount } from "../store/features/counter";

export const UseCounter = () => {
	const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);

	const onIncrement = () => {
    dispatch(setCount(count + 1));
  }

  const onDecrement = () => {
    dispatch(setCount(count - 1));
  }

	return {
		count, onIncrement, onDecrement,
	}
};
