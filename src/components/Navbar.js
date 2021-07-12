export function Navbar(props) {
  return(
    <div className="navbar__element">
      <a href={props.href} className="icon icom-man">{props.navbar}</a>
    </div>
  );
}