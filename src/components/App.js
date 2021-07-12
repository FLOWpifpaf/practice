import willy from '../img/willy.jpg';

import '../css/style.css';
import '../css/carousel.css';
import '../css/carousel.css';

import {Carousel} from './Carousel';
import {List} from './List';
import {Navbar} from './Navbar';

function App() {
  return (
    <div className="background">
      <header className="panel">
        <div className="panel__navbar">
          <Navbar href="#about-me" navbar="Biography"/>
          <Navbar href="#hobby" navbar="Hobbies"/>
          <Navbar href="#sweets" navbar="Sweets"/>
        </div>
      </header>
      <div className="container">
        <div className="grid__container">
          <div className="title">
            <p className="title__quote">
              I will give you not just something, but something from something better than any other thing...
            </p>
            <p className="title__author">&mdash;
              Willy Wonka
            </p>
          </div>
          <div className="header">
            <h1 className="header__name">Willy Wonka</h1>
          </div>
          <div className="content">
            <p className="block__content" id="about-me">
              Willy Wonka is the main character of the book "Charlie and the Chocolate Factory", which was written by Roald Dahl. The author described a character who loves chocolate to the point of insanity and is a genius in the field of confectionery. The hero of the work has opened a magic factory, the products of which are unique and conquer the sweet tooth.
            </p>
            <h2 className="block__hobby" id="hobby">Hobbies</h2>
            <p className="block__content hobby">
              He is an eccentric, inventive, brilliant pastry chef, selflessly in love with his work, which is also the meaning of life for him, a hobby.
            </p>
          </div>
          <div className="write-me">
            <a href="#form"className="write-me_link">
              <span className="link__hyperlink">
                Write me<span className="arrow"></span>
              </span>
            </a>
          </div>
          <div className="willy">
            <img src={willy} className="willy__images" alt="Willy"/>
          </div>
          <div className="facts">
            <h3 className="facts__header">Interesting facts</h3>
            <List lists="I went with braces"/>
            <List lists="I didn't eat sweets in childhood"/>
            <List lists="he was a strict father"/>
            <List lists="there were mental problems"/>
            <List lists="very strange"/>
            <List lists="does not like children"/>
            <List lists="talks a lot"/>
            <List lists="a brilliant pastry chef"/>
            <List lists="he wears a hat"/>
          </div>
        </div>
      </div>

      <Carousel/>

      <div className="form">
        <div className="form__header">
          <h2 className="header__text" id="form">Feedback</h2>
        </div>
        <form method="post" className="form__content" action="">
          <label className="content__text content__text_blue" for="">
            Name
          </label>
          <input className="content__printing" type="text" name="name" maxlength="30" value=""/>
          <p className="errors-input"></p>
          <label className="content__text content__text_blue" for="">
            Email
          </label>
          <input className="content__printing" type="email" name="e-mail" maxlength="30" value=""/>
            <p className="errors-input"></p>
          <label className="content__text" for="">Сountry</label>
          <select className="content__country country__item" name="country" id="">
            <option className="country__item " value="Russian">
              Russian
            </option>
            <option className="country__item" value="USA">
              USA
            </option>
          </select>
          <label className="content__text" for="">Gender</label>
          <div className="content__radio">
            <input className="radio__item" type="radio" name="gender" id="point" value="Man" checked />
            <label className="radio" for="point">
              Man
            </label>
            <input className="radio__item" type="radio" name="gender" id="power" value="Woman" />
            <label className="radio" for="power">
              Woman
            </label>
          </div>
          <label className="content__text content__text_blue" for="">
            Feedback
          </label>
          <textarea className="content__write" name="about-me" maxlength="200"></textarea>
            <p className="errors"></p>
          <div className="block-sweets__button send">
          <button className="button__films" type="submit">Send</button>
          </div>
        </form>
      </div>
      <footer className="postscript">
        <p className="postcript__paragarph">
          The hero of the fairy tale story by Roald Dahl "Charlie and the Chocolate Factory", as well as the film adaptations "Willy Wonka and the Chocolate Factory" and "Charlie and the Chocolate Factory".
        </p>
      </footer>
    </div>
    );
}
export default App;
