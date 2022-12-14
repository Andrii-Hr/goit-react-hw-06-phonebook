import { deleteContact } from 'redux/phoneBook';
import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.list}>
        {contacts
          .filter(el => el.name.toLowerCase().includes(filter))
          .map(({ id, number, name }) => (
            <li className={css.item} key={id}>
              {name} : {number}
              <button
                className={css.deletedBtn}
                type="button"
                onClick={() => dispatch(deleteContact({ id }))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
