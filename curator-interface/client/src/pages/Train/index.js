import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../hooks/globalState";
import Header from "../../components/Header";

import CognosApi from "../../helpers/cognos";
import { getCognosSession, initializeExperiments } from "../../helpers/helpers";

import CognosConfigModal from "../../components/CognosConfigModal";
import SaveModal from "../../components/SaveModal";
import LoadModal from "../../components/LoadModal";

import "./style.css";

export default function CognosPage() {
  const {
    account,
    history,
    language,
    setLanguage,
    setCognosConfigOpen,
    setCognosHelpOpen,
    cognosSession,
    setCognosSession,
    credentialsAndDefaults,
    setSuccessOpen,
    setUnsavedChanges,
    setStandardDashboardModal,
  } = useGlobalState();

  const [renderSave, setRenderSave] = useState(false);

  useEffect(async () => {
    if (account.entity.name === "") {
      history.push("/login");
    } else {
      setCognosSession(null);
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) setLanguage(storedLanguage);

      setSuccessOpen(false);
      setStandardDashboardModal(false);

      if (
        credentialsAndDefaults.credentials.cognosUsername &&
        credentialsAndDefaults.credentials.cognosUsername !== "null" &&
        credentialsAndDefaults.credentials.cognosPassword &&
        credentialsAndDefaults.credentials.cognosPassword !== "null"
      ) {
        const session = await getCognosSession(
          credentialsAndDefaults.credentials.cognosUsername,
          credentialsAndDefaults.credentials.cognosPassword
        );
        if (session.data.Error) {
          setCognosSession(null);
        } else {
          setCognosSession(session.data);
        }
      } else {
        setCognosConfigOpen(true);
      }
    }
  }, []);

  async function initializeDashboard(cognosApi) {
    cognosApi.initialize().then(async () => {
      cognosApi.dashboard
        .openDashboard({
          dashboardSpec: await initializeExperiments(
            credentialsAndDefaults.defaults.xsd,
            credentialsAndDefaults.credentials.jdbcUrl,
            credentialsAndDefaults.defaults.driverClassName,
            credentialsAndDefaults.defaults.schema,
            credentialsAndDefaults.credentials.db2Username,
            credentialsAndDefaults.credentials.db2Password,
            credentialsAndDefaults.defaults.overviewTable,
            credentialsAndDefaults.defaults.classDistributionTable,
            credentialsAndDefaults.defaults.precisionAtKTable,
            credentialsAndDefaults.defaults.classAccuracyTable,
            credentialsAndDefaults.defaults.pairWiseClassErrorsTable,
            credentialsAndDefaults.defaults.accuracyVsCoverageTable
          ),
        })
        .then(async (dashboardAPI) => {
          dashboardAPI.setMode(dashboardAPI.MODES.VIEW);

          dashboardAPI.on(dashboardAPI.EVENTS.DIRTY, async () => {
            const dashSpec = await dashboardAPI.getSpec();
            setUnsavedChanges(true);
          });
        });
    });
  }

  useEffect(async () => {
    if (cognosSession && typeof cognosSession === "string") {
      const cognosApi = new CognosApi({
        cognosRootURL:
          "https://us-south.dynamic-dashboard-embedded.cloud.ibm.com/daas/",
        node: document.getElementById("cognosDiv"),
        sessionCode: cognosSession,
        language: language,
      });
      setCognosConfigOpen(false);
      await initializeDashboard(cognosApi);
    }
  }, [cognosSession]);

  return (
    <>
      <Header
        modalOpen={setCognosConfigOpen}
        helpOpen={setCognosHelpOpen}
        renderButton={renderSave}
      />
      <div id="content">
        <SaveModal />
        <LoadModal />
        <CognosConfigModal />
        {cognosSession && <div id="cognosDiv"></div>}
      </div>
    </>
  );
}
