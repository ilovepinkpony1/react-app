import React from 'react';
import User from './User';
import { SORTING_TYPES } from '../constants';
import './users.css';
import Results from './Results';
import ModalUser from './ModalUser';
import PropTypes from 'prop-types';

const { BOOLEAN, STRING, NUMBER } = SORTING_TYPES;

export default function Table(props) {
  const {
    handleChangeInputSearch,
    showModal,
    quitModal,
    data,
    modalValues,
    modalDisplay,
    searchValue,
    sortTable,
  } = props;
  
  if (data.length > 0) {
    const usersMap = data
      .filter(user =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.surName.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((user, index) => {
        return (
          <User
            name={user.name}
            surName={user.surName}
            age={user.age}
            isActive={user.isActive}
            key={index}
            showModal={showModal}
          />
        );
      });
    return (
      <div className='users-wrapper'>
        {usersMap.length === 30 ? null : <Results value={usersMap.length} />}
        <input
          type='text'
          name='search'
          value={searchValue}
          onChange={(event) => handleChangeInputSearch(event)}
          className='users__input'
          placeholder='search'
        />
        <table className='users-table'>
          <thead className='users-table__head'>
            <tr>
              <td onClick={() => sortTable(STRING, 'name')}>Name</td>
              <td onClick={() => sortTable(STRING, 'surName')}>Surname</td>
              <td onClick={() => sortTable(NUMBER, 'age')}>Age</td>
              <td onClick={() => sortTable(BOOLEAN, 'isActive')}>
                Online
              </td>
            </tr>
          </thead>
          <tbody className='users-tbody'>{usersMap}</tbody>
        </table>
        {modalDisplay ? (
          <ModalUser
            name={modalValues.name}
            surName={modalValues.surName}
            age={modalValues.age}
            quitModal={quitModal}
            isActive={modalValues.isActive}
          />
        ) : null}
      </div>
    );
  }
  return <div>Loading...</div>;
}


Table.propTypes = {
  handleChangeInputSearch: PropTypes.func,
  showModal: PropTypes.func,
  quitModal: PropTypes.func,
  data: PropTypes.array,
  modalValues: PropTypes.object,
  modalDisplay: PropTypes.bool,
  searchValue: PropTypes.string,
  sortTable: PropTypes.func,
};