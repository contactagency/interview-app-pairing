import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

interface ErrorProps {
  message: React.ReactNode;
}

const StyledError = styled(Text)`
  color: #d32014;
  font-weight: bold;
`;

const Error = ({ message }: ErrorProps) => <StyledError>{message}</StyledError>;

export default Error;
