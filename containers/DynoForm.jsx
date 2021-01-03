import React from "react";
import { Box, Text } from "rebass";
import { DynoFormComponent } from "components";

const DynoForm = ({ config: { questions } }) => {
  if (!questions) {
    return <Box>Invalid form config</Box>;
  }
  return (
    <Box width={[1, 400]}>
      <Text as="legend" fontSize={4} fontWeight="bold" mb={3} color="primary" textAlign="center">
        User Information
      </Text>
      <DynoFormComponent formGroups={questions} />
    </Box>
  );
};

export default DynoForm;
