import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const TalentRowView = styled.ScrollView`
  padding: 10px;
`;

const TalentRow = ({ talent }) => {
  return (
    <TalentRowView>
      <Text>{talent.name}</Text>
    </TalentRowView>
  );
};

export default TalentRow;
