import { useGlobalState } from "../../hooks/globalState";
import { useEffect, useState } from "react";
import Image from "../../images/capa.png";

import textLanguage from "../../helpers/languagesConfig";

import "./style.css";

export default function HomeImage() {
  const { language } = useGlobalState();

  return (
    <div id="flex">
      <p id="welcome">{textLanguage[language].home.welcome}</p>
      <div id="div">
        <img src={Image} id="image"></img>
      </div>
    </div>
  );
}
