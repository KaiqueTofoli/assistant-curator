import React, { useEffect } from "react";
import "carbon-components/css/carbon-components.min.css";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks/globalState";

import ConfigModal from "../../components/ConfigModal";
import HomeImage from "../../components/HomeImage";
import HomeCards from "../../components/HomeCards";

import "./style.css";

export default function Home() {
  const {
    history,
    account,
    setLanguage,
    setHomeHelpOpen,
    setAccountModalOpen,
    setSuccessOpen,
    setWarningOpen,
    setStandardDashboardModal,
  } = useGlobalState();

  useEffect(async () => {
    if (account.entity.name === "") {
      history.push("/login");
    } else {
      setSuccessOpen(false);
      setWarningOpen(false);
      setStandardDashboardModal(false);

      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) setLanguage(storedLanguage);

      if (!localStorage.getItem("savedAccount")) {
        setAccountModalOpen(true);
      }
    }
  }, []);

  return (
    <div id="homeBody">
      <Header modalOpen={setAccountModalOpen} helpOpen={setHomeHelpOpen} />
      <ConfigModal />
      <HomeImage />
      <HomeCards />
    </div>
  );
}
