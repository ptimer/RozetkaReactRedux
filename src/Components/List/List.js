import './List.scss';

function List({children}) {
  return (
    <ul className='list-items'>
      {children}
    </ul>
  );
}

export default List;
