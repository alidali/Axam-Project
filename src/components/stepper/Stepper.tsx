import { Box, Chip, Grid } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import {spacing} from '@mui/system'
import React, { Fragment, useEffect, useState } from "react";

// ========================================================
type Step = { title: string; disabled: boolean };
type StepperProps = {
  stepperList: Step[];
  selectedStep: number;
  onChange?: (step: number) => void;
};
// ========================================================

const Stepper: React.FC<StepperProps> = ({
  selectedStep,
  stepperList,
  onChange,
}) => {
  const [selected, setSelected] = useState(selectedStep - 1);

  const handleStepClick = (step: Step, ind: number) => () => {
    if (!step.disabled) {
      setSelected(ind);
      if (onChange) onChange(ind);
    }
  };

  useEffect(() => {
    setSelected(selectedStep - 1);
    
  }, [selectedStep]);

  return (
   

    <Grid
 display="flex"

  container
  spacing={5}
  // marginLeft={-35}
  direction="column"
  alignItems="center"
  
  justifyContent="center">
      {stepperList.map((step, ind) => (
        <Fragment key={step.title}>
          <Chip
            disabled={step.disabled}
            // label={`${ind + 1}. ${step.title}`}
            label={`${ind + 1}`}
            onClick={handleStepClick(step, ind)}
            sx={{
              backgroundColor:
                ind <= selected ? "primary.main" : "primary.light",
              color: ind <= selected ? "primary.contrastText" : "primary.main",
                //  p: "1rem ",
              fontSize: "30px",
              fontWeight: "800",
              // my: "4px",
              "&:hover:not(:disabled)": {
                backgroundColor: "#e0e0e0",
                color: "primary.contrastText",
                 
              },
            }}
          />
          {ind < stepperList.length - 1 && (
            <Box 
              width="4px"
              height="140px"
              
              bgcolor={ind < selected ? "primary.main" : "primary.light"}
            />
          )}
        </Fragment>
      ))}
    </Grid>
  );
};

Stepper.defaultProps = { selectedStep: 1 };

export default Stepper;
