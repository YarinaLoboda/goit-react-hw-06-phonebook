import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { InputValue } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const checkFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label>
      <i>Find contacts by name</i>
      <InputValue type="text" value={filter} onChange={checkFilter} />
    </label>
  );
}
