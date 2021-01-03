import React from "react";
import { Button, Box, Card, Text } from "rebass";
import { Label, Input, Select } from "@rebass/forms";
import { camelCase } from "lodash";

const DynoForm = ({ formGroups }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    for (let pair of data.entries()) {
      console.log(`${camelCase(pair[0])}: ${pair[1]},`);
    }
  };

  const renderFieldInput = (name, type, options) => {
    switch (type) {
      case "text":
        return (
          <Input
            mt={1}
            sx={{ borderColor: "lightgray" }}
            id={name}
            name={name}
          />
        );

      case "dropdown":
        return (
          <Select
            mt={1}
            sx={{ borderColor: "lightgray" }}
            id={name}
            name={name}
          >
            {Object.entries(options).map(([_, option]) => (
              <option key={option}>{option}</option>
            ))}
          </Select>
        );
    }
  };

  const renderFormCard = ({ title, fields }) => (
    <Card
      p={4}
      my={2}
      sx={{ borderRadius: 5, boxShadow: "0 0 10px -5px rgba(0, 0, 0, 0.2)" }}
      key={title}
    >
      <Text fontSize={3} mb={3} color="primary" textAlign="center">
        {title}
      </Text>
      {fields.map(({ name, label, type, options }) => (
        <Box key={name} my={3}>
          <Label htmlFor={name}>{label}</Label>
          {renderFieldInput(name, type, options)}
        </Box>
      ))}
    </Card>
  );

  return (
    <Box textAlign="center" my={2} as="form" onSubmit={handleSubmit}>
      {formGroups.map(renderFormCard)}
      <Button my={3} backgroundColor="red" width={1 / 3}>
        Submit
      </Button>
    </Box>
  );
};

export default DynoForm;
