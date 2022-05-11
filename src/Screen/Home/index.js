import React from "react";
import Header from "../../Components/Header";
import { Main, Title } from "../../Theme/style";
import { useState, useEffect } from "react";
import { Button, Images, Img, Hero, Section } from "./styled";
const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
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
      setIsLoad(false);
    };
    fetchData();
  }, []);
  return (
    <Main>
      <Header />
      <Hero>
        <h1>Title</h1>
        <p>This is just a film description to get from the api</p>
      </Hero>
      <Section>
        <Title>Popular Movies</Title>
        {isLoad ? (
          "Loading..."
        ) : (
          <Images>
            {items?.map((ele) => {
              return <Img src={ele} />;
            })}
          </Images>
        )}
      </Section>
      <Button>Load more...</Button>
    </Main>
  );
};

export default Home;
