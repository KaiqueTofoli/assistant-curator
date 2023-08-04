import React, { useEffect } from "react";
import "carbon-components/css/carbon-components.min.css";
import Header from "../../components/Header";
import BasicTabs from "../../components/Tabs";
import { useGlobalState } from "../../hooks/globalState";
import { createRows, getLogs } from "../../helpers/helpers";
import { TabsSkeleton, DataTableSkeleton } from "carbon-components-react";

import ConfigModal from "../../components/ConfigModal";
import PaginationComponent from "../../components/PaginationComponent";
import DateChooser from "../../components/DateChooser";

import "./style.css";

export default function Dashboard() {
  const {
    history,
    account,
    setLanguage,
    setLoading,
    loading,
    setHelpOpen,
    setConfigOpen,
    setSuccessOpen,
    setWarningOpen,
    setRowData,
    conversations,
    setConversations,
    setConversationsByDay,
    setIntentsByDay,
    setDateFilter,
    credentialsAndDefaults,
    setCognosSession,
  } = useGlobalState();

  useEffect(async () => {
    if (account.entity.name === "") {
      history.push("/login");
    } else {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) setLanguage(storedLanguage);

      setSuccessOpen(false);
      setWarningOpen(false);
      setCognosSession(null);

      if (conversations.length === 0)
        await getLogs(
          credentialsAndDefaults.credentials.connectionString,
          credentialsAndDefaults.defaults.logsTable,
          setConversations,
          setConversationsByDay,
          setIntentsByDay,
          setDateFilter,
          setSuccessOpen,
          setLoading,
          setConfigOpen,
          true
        );
    }
  }, []);

  useEffect(() => {
    createRows(conversations, setRowData);
  }, [conversations]);

  return (
    <div>
      <Header modalOpen={setConfigOpen} helpOpen={setHelpOpen} />
      <div id="content">
        <ConfigModal />
        {loading ? (
          <>
            <TabsSkeleton type="container" />
            <DataTableSkeleton />
          </>
        ) : (
          <>
            <div id="dateChooser">
              <DateChooser />
            </div>
            <BasicTabs />
            <div id="footer">
              <div id="pagination">
                <PaginationComponent />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
