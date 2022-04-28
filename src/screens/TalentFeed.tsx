import React from "react";
import { Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import TalentList from "../components/TalentList";
import Loading from "../components/Loading";
import { TalentStackRoutes } from "../routes";
import { Talent } from "../types";

const GET_TALENT_LIST = gql`
  query talentList {
    talentList {
      id
      name
    }
  }
`;

interface QueryResult {
  talentList: Talent[];
}

const TalentFeedScreen = ({
  navigation,
}: NativeStackScreenProps<TalentStackRoutes, "TalentFeed">) => {
  const { loading, error, data } = useQuery<QueryResult>(GET_TALENT_LIST);

  if (loading) return <Loading />;

  if (error || !data) return <Text>Error loading talent</Text>;

  return (
    <TalentList
      talentList={data.talentList}
      onTalentPress={(talentId) => {
        navigation.navigate("TalentProfile", {
          id: talentId,
        });
      }}
    />
  );
};

export default TalentFeedScreen;
