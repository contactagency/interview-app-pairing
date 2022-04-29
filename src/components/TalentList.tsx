import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  ListRenderItemInfo,
} from "react-native";
import styled from "styled-components/native";
import { Talent } from "../types";

import TalentRow from "./TalentRow";

const FeedView = styled.View`
  height: 100px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ced0ce;
`;

interface TalentListProps {
  talentList: Talent[];
  onTalentPress: (talentId: string) => void;
}

const TalentList = ({ talentList, onTalentPress }: TalentListProps) => (
  <View>
    <FlatList
      data={talentList}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: ListRenderItemInfo<Talent>) => (
        <TouchableOpacity onPress={() => onTalentPress(item.id)}>
          <FeedView>
            <TalentRow talent={item} />
          </FeedView>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default TalentList;
