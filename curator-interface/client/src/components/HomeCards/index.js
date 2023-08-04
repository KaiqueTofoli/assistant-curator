import { useGlobalState } from "../../hooks/globalState";
import { useEffect, useState } from "react";
import { Button } from "carbon-components-react";
import { ArrowRight32 } from "@carbon/icons-react";

import textLanguage from "../../helpers/languagesConfig";

import "./style.css";

export default function HomeCards() {
  const { language, history } = useGlobalState();

  return (
    <div id="cards">
      <div className="card">
        <h4>{textLanguage[language].home.cardHeader3}</h4>
        <p>{textLanguage[language].home.cardContent3}</p>
        <Button
          kind="primary"
          onClick={() => history.push(`/train`)}
          hasIconOnly
          renderIcon={ArrowRight32}
          iconDescription="Go to the page"
        ></Button>
      </div>
      <div className="card">
        <h4>{textLanguage[language].home.cardHeader1}</h4>
        <p>{textLanguage[language].home.cardContent1}</p>
        <Button
          kind="primary"
          onClick={() => history.push(`/dashboard`)}
          hasIconOnly
          renderIcon={ArrowRight32}
          iconDescription="Go to the page"
        ></Button>
      </div>
      <div className="card">
        <h4>{textLanguage[language].home.cardHeader2}</h4>
        <p>{textLanguage[language].home.cardContent2}</p>
        <Button
          kind="primary"
          onClick={() => history.push(`/cognos`)}
          hasIconOnly
          renderIcon={ArrowRight32}
          iconDescription="Go to the page"
        ></Button>
      </div>
    </div>
  );
}
