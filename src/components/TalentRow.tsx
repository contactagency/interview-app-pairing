import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Talent } from "../types";

const TalentRowView = styled.ScrollView`
  padding: 10px;
`;

interface TalentRowProps {
  talent: Talent;
}

const TalentRow = ({ talent }: TalentRowProps) => (
  <TalentRowView>
    <Text>{talent.name}</Text>
  </TalentRowView>
);

export default TalentRow;
