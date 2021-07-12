import {Card} from './Card';

import griljayzh from '../img/griljayzh.jpg';
import halva from '../img/halva.jpg';
import ledency from '../img/ledency.jpg';
import marzipan from '../img/Marzipan.jpg';
import meringhe from '../img/meringhe.jpg';
import mousse from '../img/mousse.jpg';
import pomadka from '../img/pomadka.jpg';
import tort from '../img/tort.jpg';
import varenje from '../img/varenje.jpeg';
import zefir from '../img/zefir.jpg';

export function Carousel() {
  window.onload = function() {
    const period = 600;
    const animation = "ease"; // linear, ease, ease-in, ease-out, ease-in-out
    const mobileSize = 768; // px
    
    document.getElementById("left").onclick = function () {
      leftShift(this);
    };
    
    document.getElementById("right").onclick = function () {
      rightShift(this);
    };
    
    document.querySelector(".cards").onclick = function (event) {
      if ((this.offsetWidth / 2 < event.pageX) && (window.innerWidth < mobileSize)) {
        rightShift(this);
      } else if ((this.offsetWidth / 2 > event.pageX) && (window.innerWidth < mobileSize)) {
        leftShift(this);
      }
    }
    
    function leftShift(button) {
      button.disabled = true;
      const sliderList = document.querySelector(".cards");
      const firstElement = sliderList.firstElementChild;
      const lastElementClone = sliderList.lastElementChild.cloneNode(true);
      const elementWidth = parseFloat(getComputedStyle(firstElement, true).width)
      const elementPaddingRight = parseFloat(getComputedStyle(firstElement, true).paddingRight);
    
      sliderList.style.pointerEvents = "none";
    
      lastElementClone.style.marginLeft = -(elementWidth + elementPaddingRight * 2) + "px";
      lastElementClone.style.transition = `margin-left ${period}ms ${animation}`;
      sliderList.insertBefore(lastElementClone, firstElement);
      setTimeout(function () {
        lastElementClone.style.marginLeft = 0;
      });
    
      setTimeout(function () {
        sliderList.lastElementChild.remove(true);
        document.getElementById("left").disabled = "";
        sliderList.style.pointerEvents = "auto";
      }, period);
    }
    
    function rightShift(button) {
      button.disabled = true;
      const sliderList = document.querySelector(".cards");
      const firstElement = sliderList.firstElementChild;
      const firstElementClone = firstElement.cloneNode(true);
      const elementWidth = parseFloat(getComputedStyle(firstElement, true).width)
      const elementPaddingRight = parseFloat(getComputedStyle(firstElement, true).paddingRight);
    
      sliderList.style.pointerEvents = "none";
    
      sliderList.style.transition = `margin-left ${period}ms ${animation}`;
      sliderList.style.marginLeft = -(elementWidth + elementPaddingRight * 2) + "px";
    
      setTimeout(function () {
        sliderList.append(firstElementClone);
        sliderList.firstElementChild.remove(true);
        sliderList.style.transition = "";
        sliderList.style.marginLeft = 0;
        document.getElementById("right").disabled = "";
        sliderList.style.pointerEvents = "auto";
      }, period);
    }
  };
  

  return (
    <div class="slider">
    <div class="btn__box btn__box_left">
      <button class="slider__button slider__button_left" id="left"></button>
    </div>
    <div class="slider__main">
      <div class="cards">
        <Card
          src={meringhe}
          title="Meringues"
          text="This French dessert consists of egg whites whipped with sugar and baked. Sometimes tartar or corn starch is also used (as a binding component). Often meringues are seasoned with vanilla and a small amount of coconut or almond extract. These products are light and airy (like a Latin American merengue dance) and very sweet (fr. baiser — 'kiss')."
        />
        <Card
          src={varenje}
          title="Jam"
          text="These are fruits or berries cooked in sweet syrup, flower petals, are classNameified depending on the cooking technology and the consistency of the finished product. So, unlike jams, jam, jam and marmalade, jam is prepablue in such a way that the ingblueients retain their shape. In addition, the jam has a non-uniform consistency and consists of more or less liquid syrup and individual pieces of fruit, or even small fruits (figs, paradise apples) and berries entirely."
        />
        <Card
          src={griljayzh}
          title="Grillage"
          text=" Grillage (fr. grillage rying) is a French dessert made of fried nuts with sugar. It comes from the eastern halva of coarse grinding. Confectioners divide grillage into two types: soft grillage-includes boiled fruits and crushed nuts; hard grillage-is crushed nuts filled with melted sugar."
        />
        <Card
          src={zefir}
          title="Marshmallows"
          text="Marshmallow is a kind of sugary confectionery; it is obtained by knocking down fruit and berry puree with sugar and egg white, followed by adding to this mixture any of the forming (jelly-forming) fillers: pectin, agar syrup, gelatin (marmalade) mass. Marshmallows were prepablue in ancient Greece, where they got their name after the god Marshmallow, according to myths, who gave his recipe to people."
        />
        <Card
          src={ledency}
          title="lollipops"
          text="Small sweets in the form of balls, tiles, pads made of caramelized sugar, chocolate, molasses, condensed milk and other products. Iris is a fondant mass obtained by boiling condensed milk with sugar, molasses (molasses) and fat (butter or vegetable oil or margarine). In crushed form, it is sold as candy."
        />
        <Card
          src={tort}
          title="Creams"
          text="Cream is a paste made of cream or butter with sugar , used as a filling and for decorating cakes and pastries. Margarine can be used instead of butter, and eggs, milk, as well as various flavoring and aromatic additives can be used as additional ingblueients: cocoa powder, vanilla, etc."
        />
        <Card
          src={marzipan}
          title="Marzipan"
          text="Marzipan (German: Marzipan, ital. marzapane is a mixture of almonds ground into flour and sugar syrup (or powdeblue sugar). If apricot seeds are used instead of almonds (less often peach ones), the confectionery product is called persipan, not marzipan. Sometimes marzipan is also called a mass of other nuts, as well as products with it. For example, in Russia, marzipan buns with peanuts are common."
        />
        <Card
          src={mousse}
          title="Mousses"
          text="Mousse (French mousse foam) is a sweet dessert dish. A specialty of French cuisine. It is prepablue from an aromatic base (fruit or berry juice, puree, grape wine, chocolate, coffee, cocoa, etc.), food substances that contribute to the formation and fixation of the foamy state of mousse (egg whites, gelatin, agar), as well as food substances that give the dish a sweet taste or enhance it (sugar, saccharin, honey, molasses). Sometimes, instead of egg whites and gelatin, a substitute is used in the form of semolina, which is able to swell well and has adhesive properties, which allows you to approximately simulate the necessary state of the dish."
        />
        <Card
          src={pomadka}
          title="Fudge"
          text=" Fudge mass (fudge) — boiled sugar syrup, quickly cooled to a temperature of 35-40° and stirblue at high speed in a fudge machine. When churning in supersaturated syrup, sucrose crystallizes. The finished product consists of small sugar crystals and intercrystalline syrup. The fondant mass varies greatly in consistency — from liquid, viscous types with a high content of molasses to a hard, brittle product, which is obtained from a less moist syrup with a small admixture of molasses. It is mainly used for the production of unglazed sweets and for decorating cakes."
        />
        <Card
          src={halva}
          title="Souffle"
          text="Souffle (French Souffé) is a dish of French origin made from egg yolks mixed with various ingblueients, where white-whipped egg whites are then added. It can be a main dish or a sweet dessert. In any case, the souffle contains at least two components: first, a flavoblue mixture of sour cream consistency and, secondly, white-whipped egg whites. The first gives the taste, and the whipped whites — the airiness of the product. The mixture is usually made on the basis of cottage cheese, chocolate or lemon (from the latter two, a dessert is prepablue by adding sugar)."
        />
      </div>
    </div>
    <div class="btn__box btn__box_right">
      <button class="slider__button slider__button_right" id="right"></button>
    </div>
  </div>
  );
}