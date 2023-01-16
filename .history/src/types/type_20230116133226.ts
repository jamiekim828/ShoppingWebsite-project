export type Product = {
    flags: {
      svg: string;
    };
    name: {
      common: string;
    };
    region: string;
    subregion : string;
    population: number;
    languages: object;
    favorite: boolean;
    capital: string[];
    timezones:string [];
    capitalInfo:{
      latlng:string []
    };
    maps: {
      googleMaps: string;
    };
  };