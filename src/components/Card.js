export function Card(props) {
  return(
      <div class="card">
        <img class="card__image" src={props.src}/>
        <h4 class="card__title">{props.title}</h4>
        <p class="card__text">
          {props.text}
        </p>
      </div>
  );
}