import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Link as RouterLink } from "react-router-dom";
import { Country } from "../../types/type"; 

type PropType = {
  countryDetail: Country;
};

export default function CountriesDetails({ countryDetail }: PropType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
            {countryDetail.name.common.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={countryDetail.name.common}
        subheader={countryDetail.capital[0]}
        sx={{ textAlign: "left" }}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ border: "1px solid lightgrey" }}
        image={countryDetail.flags.svg}
        alt="Paella dish"
      />
      <CardContent>
          <Typography variant="body2" color="text.secondary" component="p" align="center">
              The country belongs to <strong className="countrydetailtext">{countryDetail.region}</strong> region and <strong className="countrydetailtext">{countryDetail.subregion}</strong> subregion. 
              The Country latitude & longitude is <strong className="countrydetailtext">{countryDetail.capitalInfo.latlng}</strong> degrees north and south.
              Population of country is <strong className="countrydetailtext">{countryDetail.population}</strong>.Languages of the country is <strong className="countrydetailtext">
              {Object.keys(countryDetail.languages).map((item, index) => {
                return (
                    <strong key={crypto.randomUUID()}>
                      {Object.values(countryDetail.languages)[index]},
                    </strong>
                );
              })}
            </strong> And the timezones is <strong className="countrydetailtext">{countryDetail.timezones}</strong>
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Back">
          <RouterLink to="/countries">
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
          </RouterLink>
        </Tooltip>
        <Tooltip title="Google Map">
          <Link
            href={countryDetail.maps.googleMaps}
            underline="none"
            target="blank"
          >
            <IconButton>
              <LocationOnIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
