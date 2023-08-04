import * as React from "react";
import { useGlobalState } from "../../hooks/globalState";
import {
  ComposedModal,
  Button,
  ModalFooter,
  ModalHeader,
  ProgressIndicator,
  ProgressStep,
} from "carbon-components-react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button2 from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1 from "./images/Step1.png";
import Step2 from "./images/Step2.png";
import Step3 from "./images/Step3.png";
import Step4 from "./images/Step4.png";
import Step5 from "./images/Step5.png";
import Step6 from "./images/Step6.png";

import textLanguage from "../../helpers/languagesConfig";

import { Help24 } from "@carbon/icons-react";
import "./style.css";

const images = [Step1, Step2, Step3, Step4, Step5, Step6, Step1];

export default function IntentHelpModal() {
  const { intentHelpOpen, setIntentHelpOpen, language } = useGlobalState();

  const steps = [
    textLanguage[language].intentModal.step1,
    textLanguage[language].intentModal.step2,
    textLanguage[language].intentModal.step3,
    textLanguage[language].intentModal.step4,
    textLanguage[language].intentModal.step5,
    textLanguage[language].intentModal.step6,
    textLanguage[language].intentModal.step7,
  ];

  const content = [
    textLanguage[language].intentModal.content1,
    textLanguage[language].intentModal.content2,
    textLanguage[language].intentModal.content3,
    textLanguage[language].intentModal.content4,
    textLanguage[language].intentModal.content5,
    textLanguage[language].intentModal.content6,
    textLanguage[language].intentModal.content7,
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    // return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div id="modal">
      <Button
        kind="primary"
        onClick={() => setIntentHelpOpen(true)}
        hasIconOnly
        renderIcon={Help24}
        iconDescription="Help"
        id="button"
      ></Button>
      <ComposedModal
        id="wrapper"
        // hasScrollingContent
        open={intentHelpOpen}
        modalHeading={"Curator Workflow"}
        // onRequestClose={() => setIntentHelpOpen(false)}
        onClose={() => setIntentHelpOpen(false)}
        preventCloseOnClickOutside
        shouldSubmitOnEnter
        size="lg"
      >
        <ModalHeader title={"Assistant Curator workflow"} />
        <p id="modalText">{textLanguage[language].intentModal.description}</p>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button2 onClick={handleReset}>Reset</Button2>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <img id="stepImg" src={images[activeStep]}></img>
                {content[activeStep]}
              </Typography>
            </React.Fragment>
          )}
        </Box>
        <ModalFooter>
          <Button
            kind="secondary"
            onClick={handleBack}
            disabled={activeStep === 0 ? true : false}
          >
            Back
          </Button>
          <Button
            kind="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1 ? true : false}
          >
            Next
          </Button>
        </ModalFooter>
      </ComposedModal>
    </div>
  );
}
