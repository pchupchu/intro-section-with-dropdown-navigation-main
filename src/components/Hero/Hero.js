import "./Hero.css";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Make remote work</h1>
        <p className="hero__text">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="hero__button">Learn more</button>
        <ul className="hero__clients">
          <li>
            <img
              className="hero__client hero__client_databiz"
              src={databiz}
              alt="databiz"
            />
          </li>
          <li>
            <img
              className="hero__client hero__client_audiophile"
              src={audiophile}
              alt="audiophile"
            />
          </li>
          <li>
            <img
              className="hero__client hero__client_meet"
              src={meet}
              alt="meet"
            />
          </li>
          <li>
            <img
              className="hero__client hero__client_maker"
              src={maker}
              alt="maker"
            />
          </li>
        </ul>
      </div>
      <div className="hero__image"></div>
    </div>
  );
}

export default Hero;
