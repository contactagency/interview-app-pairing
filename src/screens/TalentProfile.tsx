import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Talent from "../components/Talent";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
  if (error) return <Error message={error.message} />;
  if (!data) return <Error message="Error! Talent not found" />;

  return <Talent talent={data.talent} />;
};

export default TalentProfileScreen;
