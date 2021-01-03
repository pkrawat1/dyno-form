import React from "react";
import { Box, Text } from "rebass";
import { DynoFormComponent } from "components";

const DynoForm = ({ config: { questions } }) => {
  if (!questions) {
    return <Box>Invalid form config</Box>;
  }
  return (
    <Box {...styles.wrapper}>
      <Text as="legend" {...styles.title}>
        User Information
      </Text>
      <DynoFormComponent formGroups={questions} />
    </Box>
  );
};

const styles = {
  wrapper: {
    width: [1, 400],
  },
  title: {
    fontSize: 4,
    fontWeight: "bold",
    mb: 3,
    color: "primary",
    textAlign: "center",
  },
};

export default DynoForm;
