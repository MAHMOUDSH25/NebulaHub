import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="hero">
        <section className="hero__section">
          <h1 id="header">
            Empower content, Unleash possibilities <br /> with ultimate headless
            CMS
          </h1>
          <p id="paragraph">
            Craft, Manage, an deliver content like never before - welcome to a
            headless CMS <br /> experience that redefines agility and
            flexability{" "}
          </p>
          <div className="hero__btn">
            <button className="btn" id="start__btn">Get Started</button>
            <button className="btn" id="create__btn">create headless</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
