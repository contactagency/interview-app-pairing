import React from 'react';
import { View, Text } from 'react-native';
// import our Apollo libraries
import { useQuery, gql } from '@apollo/client';

import TalentList from '../components/TalentList';
import Loading from '../components/Loading';

// compose our query
const GET_TALENT_LIST = gql`
  query talentList {
    talentList {
      id
      name
      avatar
    }
  }
`;

const TalentFeed = props => {
  const { loading, error, data } = useQuery(GET_TALENT_LIST);

  if (loading) return <Loading />;

  if (error) return <Text>Error loading talent</Text>;

  return <TalentList talentList={data.talentList} navigation={props.navigation} />;
};

TalentFeed.navigationOptions = {
  title: 'Talent Feed'
};

export default TalentFeed;
