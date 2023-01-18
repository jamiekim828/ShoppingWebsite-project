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
  import { ProductType } from "../../types/type"; 
  
  type PropType = {
    productDetail: ProductType;
  };
  
  export default function CountriesDetails({ productDetail }: PropType) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
              {productDetail.title.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={productDetail.title}
          subheader={productDetail.category[0]}
          sx={{ textAlign: "left" }}
        />
        <CardMedia
          component="img"
          height="194"
          sx={{ border: "1px solid lightgrey" }}
          image={productDetail.image}
          alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary" component="p" align="center">
                 <strong className="countrydetailtext">{productDetail.description}</strong>  <strong className="countrydetailtext">{productDetail.price}</strong> 
                The Country latitude & longitude is <strong className="countrydetailtext">{productDetail.capitalInfo.latlng}</strong> 
                Population of country is <strong className="countrydetailtext">{productDetail.rating.count}</strong><strong className="countrydetailtext">
                
              </strong> 
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
              href={productDetail.maps.googleMaps}
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
  