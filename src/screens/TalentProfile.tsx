import React from "react";
import { Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Talent from "../components/Talent";
import Loading from "../components/Loading";
import { TalentStackRoutes } from "../routes";
import { Talent as TalentType } from "../types";

const GET_TALENT = gql`
  query talent($id: ID!) {
    talent(id: $id) {
      id
      name
      dob
      avatar
    }
  }
`;

interface QueryResult {
  talent: TalentType;
}

const TalentProfileScreen = (
  props: NativeStackScreenProps<TalentStackRoutes, "TalentProfile">
) => {
  const id = props.route.params.id;
  const { loading, error, data } = useQuery<QueryResult>(GET_TALENT, {
    variables: { id },
  });

  if (loading) return <Loading />;

  if (error || !data) return <Text>Error! Talent not found</Text>;

  return <Talent talent={data.talent} />;
};

export default TalentProfileScreen;
