import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-sizing:border-box;
`;

export const Main = styled(Flex)`
  height:auto;
  width: 100%;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: black;
`;
