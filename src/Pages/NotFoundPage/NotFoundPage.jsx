import React from "react";
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div>
      <header className="top-header"></header>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Zona Descafeinada</h1>
            <p className="message__text">
              Sin café no hay vida, y aquí no hay vida... :C
            </p>
          </div>
          <div className="error__nav e-nav">
            <a href="" target="http://localhost:3000" className="e-nav__link"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
