import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Talent as TalentType } from "../types";

const TalentView = styled.ScrollView`
  padding: 10px;
`;

const Avatar = styled.Image`
  height: 20px;
  resize-mode: cover;
  overflow: hidden;
`;

interface TalentProps {
  talent: TalentType;
}

const Talent = ({ talent }: TalentProps) => (
  <TalentView>
    <Avatar source={{ uri: talent.avatar }} />
    <Text>Name: {talent.name}</Text>
    <Text>Dob: {talent.dob}</Text>
  </TalentView>
);

export default Talent;
