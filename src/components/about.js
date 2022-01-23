import { languageContext } from "../context/index";

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
const About = (props) => {
  console.log(props);

  const history = useHistory();
  const { lang, setLang } = useContext(languageContext);
  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };
  const handleRedirect = () => {
    history.push("/");
  };
  return (
    <div className="mt-5 bt-5">
      <div className="container mt-5" dir={lang === "en" ? "ltr" : "rtl"}>
        <h2 className="mt-5 pt-5">About us</h2>

        <h1>{lang}</h1>
        <p>
          Nullam quis risus eget vel eu leo. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor
          id nibh ultricies vehicula.
        </p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
          The following is <strong>rendered as bold text</strong>.
        </p>
        <p>
          The following is <em>rendered as italicized text</em>.
        </p>
        <p>
          An abbreviation of the word attribute is{" "}
          <abbr title="attribute">attr</abbr>.
        </p>
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            toggleLanguage();
          }}
        >
          change language
        </button>
        <br />
        <br />
        <button
          className="btn btn-success btn-sm"
          onClick={() => handleRedirect()}
        >
          Back to Movies
        </button>
      </div>
    </div>
  );
};

export default About;
