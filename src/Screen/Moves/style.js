import styled from "styled-components";
import { Flex } from "../../Theme/style";
export const Card = styled(Flex)`
  width: 80%;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Navbar = styled(Flex)`
  background-color: #757575;
  width: 100%;
  height: 2rem;
`;
export const Navtext = styled.p`
  width: 80%;
  font-size: 1rem;
  text-align: left;
  color: #bdbebd;
`;
export const Moveshero = styled(Flex)`
  height: 40rem;
  width: 100%;
  background-image: url(https://i.pinimg.com/originals/a3/ae/a8/a3aea82cc647be08e2ace964c9d68602.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Imgcard = styled.img`
  width: 30%;
  height: 100%;
`;
export const Carddescription = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 1rem;
  width: 70%;
  height: 85%;
  color: white;
`;
export const Actor = styled(Flex)`
  justify-content: space-between;
  height: 7rem;
  width: 24%;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Actordesc = styled.div`
  height: 80%;
  width: 65%;
  color: white;
  text-align: left;
`;
export const Rating1 = styled(Flex)`
  width: 25%;
  height: 1rem;
  justify-content: space-between;
`;
export const ReatingDiv = styled.div`
  width: 80%;
  height: 0.6rem;
  background-color: green;
  border-radius: 15px;
`;
export const Reatingspan = styled.span`
  width: 80%;
  height: 0.6rem;
  background-color: white;
  border-radius: 15px;
`;
export const Actorname = styled.h1`
  font-size: 1rem;
`;
export const Actorimg = styled.img`
  width: 30%;
  height: 100%;
`;
export const Actorsection = styled.section`
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  height: 30rem;
  text-align: left;
`;
