import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import TalentRow from './TalentRow';

// FeedView styled-component definition
const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ced0ce;
`;

const TalentList = props => {
  return (
    <View>
      <FlatList
        data={props.talentList}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Talent', {
                id: item.id
              })
            }
          >
            <FeedView>
              <TalentRow talent={item} />
            </FeedView>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TalentList;
