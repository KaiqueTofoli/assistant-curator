import { useGlobalState } from "../../hooks/globalState";
import { Modal } from "carbon-components-react";
import textLanguage from "../../helpers/languagesConfig";
import "./style.css";

export default function HomeHelp() {
  const { language, homeHelp, setHomeHelpOpen } = useGlobalState();

  return (
    <Modal
      open={homeHelp}
      modalHeading={textLanguage[language].homeHelp.heading}
      onRequestClose={() => {
        setHomeHelpOpen(false);
      }}
      preventCloseOnClickOutside
      passiveModal
    >
      <p>{textLanguage[language].homeHelp.text}</p>
    </Modal>
  );
}
