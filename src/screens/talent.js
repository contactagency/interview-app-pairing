import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import Talent from '../components/Talent';
import Loading from '../components/Loading';


const GET_TALENT = gql`
  query talent($id: ID!) {
    talent(id: $id) {
      id
      name
      eyes
      height
      dob
      avatar
    }
  }
`;

const TalentScreen = props => {
  const id = props.route.params.id;
  const { loading, error, data } = useQuery(GET_TALENT, { variables: { id } });

  if (loading) return <Loading />;

  if (error) return <Text>Error! Talent not found</Text>;

  return <Talent talent={data.talent} />;
};

export default TalentScreen;
