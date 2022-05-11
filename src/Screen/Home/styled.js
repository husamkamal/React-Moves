import styled from "styled-components";
import { Flex } from "../../Theme/style";
export const Images = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 90%;
`;
export const Hero = styled(Flex)`
  height: 30rem;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  flex-direction: column;
  background-image: url(https://i.pinimg.com/originals/a3/ae/a8/a3aea82cc647be08e2ace964c9d68602.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-left: 10rem;
`;
export const Section = styled(Flex)`
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  height: 50rem;
`;

export const Img = styled.img`
  width: 24%;
  height: 20rem;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  border-radius: 18px;
  color: white;
  background-color: #87cefa;
  border: none;
`;
