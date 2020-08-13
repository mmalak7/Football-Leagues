import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import "./Main.scss";

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountryLeague();
  }, []);

  const getCountryLeague = async (country = "England") => {
    await fetch(
      //   `https://api-football-v1.p.rapidapi.com/v2/leagues/country/england/2018`,
      `https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/2018`,
      {
        method: "GET",
        headers: new Headers({
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "4d1cbd7ca8msh70162dd55483f25p1dc9f8jsn161ec68d269d",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setCountries(response.api.leagues);
        console.log(response.api.leagues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-wrapper">
      <ul className="buttons-wrapper">
        <li>
          <button onClick={() => getCountryLeague("England")}>England</button>
        </li>
        <li>
          <button onClick={() => getCountryLeague("Germany")}>Germany</button>
        </li>
        <li>
          <button onClick={() => getCountryLeague("France")}>France</button>
        </li>
        <li>
          <button onClick={() => getCountryLeague("Spain")}>Spain</button>
        </li>
        <li>
          <button onClick={() => getCountryLeague("Italy")}>Italy</button>
        </li>
      </ul>
      <Grid container spacing={3} className="grid-wrapper">
        {countries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card key={country.league_id} className="card-wrapper">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="alt"
                  width="151"
                  height="225"
                  image={country.logo}
                  title="title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {country.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Season start: {country.season_start} <br></br>
                    Season end: {country.season_end}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Show More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
