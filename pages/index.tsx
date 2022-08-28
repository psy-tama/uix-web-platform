import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ color }) => color};
  text-align: center;
`;

export default function Home() {
  return <H1 color="teal">Welcome to UIX Web Platform</H1>;
}
