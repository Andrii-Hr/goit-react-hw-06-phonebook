
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/phoneBook'

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      name="filter"
      onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}/>
      </label>
  )
}


export default Filter;
