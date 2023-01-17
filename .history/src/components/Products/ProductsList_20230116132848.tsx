import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Box
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CountriesItem from "./CountriesItem";
import { Country } from "../../types/type"; 
import { countriesActions } from "../../redux/slice/countries";
import { fetchCountriesData } from "../../redux/thunk/countries";
import { RootState, AppDispatch } from "../../redux/strore";

type PropType = {
  userInput: string;
};

// Table style from MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(
  flags: {
    svg: string;
  },
  name: {
    common: string;
  },
  region: string,
  subregion : string,
  population: number,
  languages: object,
  favorite: boolean,
  capital: string[],
  timezones:string [],
  capitalInfo:{
    latlng:string []
  },
  maps: {
    googleMaps: string;
  }
): Country {
  return {
    flags,
    name,
    region,
    subregion,
    population,
    languages,
    favorite,
    capital,
    capitalInfo,
    timezones,
    maps,
  };
}

export default function CountriesList({ userInput }: PropType) {
  const [sortBtn, setSortBtn] = useState(false);
  const countriesList = useSelector(
    (state: RootState) => state.countries.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  const dispatchNorm = useDispatch();
  useEffect(() => {
    if (userInput === "") {
      dispatch(fetchCountriesData());
    }
  }, [dispatch, userInput]);

  const countryRows = countriesList.map((country) => {
    return createData(
      country.flags,
      country.name,
      country.region,
      country.subregion,
      country.population,
      country.languages,
      country.favorite,
      country.capital,
      country.timezones,
      country.capitalInfo,
      country.maps
    );
  });

  const ascSortedCoutry = () => {
    setSortBtn(true);
    countryRows.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    dispatchNorm(countriesActions.getCountryData(countryRows));
  };

  const decSortedCoutry = () => {
    setSortBtn(false);
    countryRows.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    dispatchNorm(countriesActions.getCountryData(countryRows));
  };


  return (
    <div>
      {countriesList.length === 0 && (
        <div className="loader">
        <Box className="loading" sx={{ ml: 10, mt: 3, width: "80%" }}>
        Loading....
        <CircularProgress />
      </Box>
      </div>
      )}
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <strong>Flag</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Name</strong>
                <Tooltip title="ordering by name">
                  {sortBtn ? (
                    <IconButton onClick={decSortedCoutry}>
                      
                      <ArrowUpwardOutlinedIcon fontSize="small"/>
                    </IconButton>
                  ) : (
                    <IconButton onClick={ascSortedCoutry}>
                      <ArrowDownwardOutlinedIcon fontSize="small" />
                    </IconButton>
                  )}
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Region</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Population</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Languages</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Favorite</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>More</strong>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {countryRows.map((country) => {
            return <CountriesItem key={crypto.randomUUID()} country={country} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
}