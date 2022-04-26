import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';

const TalentRowView = styled.ScrollView`
  padding: 10px;
`;

const TalentRow = ({ talent }) => {
  return (
    <TalentRowView>
      <Text>
        {talent.name}
      </Text>
    </TalentRowView>
  );
};

export default TalentRow;