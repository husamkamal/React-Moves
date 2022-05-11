import React from "react";
import Header from "../../Components/Header";
import { Main, Section, Title } from "../../Theme/style";
import { Images, Img } from "../Home/styled";
import {
  Actor,
  Actordesc,
  Actorimg,
  Actorname,
  Actorsection,
  Card,
  Carddescription,
  Imgcard,
  Moveshero,
  Navbar,
  Navtext,
  Rating1,
  ReatingDiv,
  Reatingspan,
} from "./style";
import { useState, useEffect } from "react";
const Moves = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?limit=50"
      );
      const responseJson = await response.json();
      const arrItems = responseJson.data.movies;
      const itemsFromApi = arrItems.filter((ele, index) => {
        return index < 8;
      });
      const itemsFromMap = itemsFromApi.map((ele) => {
        return ele.large_cover_image;
      });
      setItems(itemsFromMap);
    };
    fetchData();
  }, []);
  return (
    <Main>
      <Header />
      <Navbar>
        <Navtext>Back/Movie Name</Navtext>
      </Navbar>
      <Moveshero>
        <Card>
          <Imgcard
            src={
              "https://i.pinimg.com/564x/16/28/39/162839861d7c6489e07764255666d840.jpg"
            }
          />
          <Carddescription>
            <h1>Movie Name</h1>
            <span>Polt</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <h3>IMDB RATING</h3>
            <Rating1>
              <Reatingspan>
                <ReatingDiv></ReatingDiv>
              </Reatingspan>
              <span>8.2</span>
            </Rating1>
            <h4>DIOECTOR</h4>
            <p>Enrico Casarosa</p>
          </Carddescription>
        </Card>
      </Moveshero>
      <Actorsection>
        <Title>Actors</Title>
        <Images>
          {items?.map((ele) => {
            return (
              <Actor>
                <Actorimg src={ele} />
                <Actordesc>
                  <Actorname>Actor Name</Actorname>
                </Actordesc>
              </Actor>
            );
          })}
        </Images>
      </Actorsection>
    </Main>
  );
};

export default Moves;
