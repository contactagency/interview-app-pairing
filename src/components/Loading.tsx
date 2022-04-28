import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <LoadingWrap>
    <ActivityIndicator size="large" />
  </LoadingWrap>
);

export default Loading;
