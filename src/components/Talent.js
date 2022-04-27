import React from "react";
import { Image, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";

const TalentView = styled.ScrollView`
  padding: 10px;
`;

const Talent = ({ talent }) => {
  return (
    <TalentView>
      <Image
        source={{ uri: talent.avatar }}
        style={{
          height: 20,
          resizeMode: "cover",
          overflow: "hidden",
        }}
      />
      <Text>Name: {talent.name}</Text>
      <Text>Dob: {format(new Date(talent.dob), "MMM do yyyy")}</Text>
    </TalentView>
  );
};

export default Talent;
