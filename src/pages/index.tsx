import styled from 'styled-components';
import { Color } from 'uikit';

const H1 = styled.h1`
  color: ${({ color }) => color};
  text-align: center;
`;

export default function Home() {
  return <H1 color={Color.black}>Welcome to UIX Web Platform</H1>;
}
