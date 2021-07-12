export function List(props) {
  return(
    <ul className="facts__list">
      <li className="list__item">{props.lists}</li>
    </ul>
  );
}