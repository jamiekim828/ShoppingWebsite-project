// MUI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// file
import './Home.css';
import HomeMidpart from './HomeMidpart';

export default function Home() {
  return (
    <div className='home-div'>
      <div className='slider'>
        <div className='slides'>
          <div id='1'>End of season event</div>
          <div id='2'>50% sale on all jeans</div>
          <div id='3'>Cashmere color remix</div>
        </div>
        <a href='#1'>
          <FiberManualRecordIcon style={{ fontSize: '10px' }} />
        </a>
        <a href='#2'>
          <FiberManualRecordIcon style={{ fontSize: '10px' }} />
        </a>
        <a href='#3'>
          <FiberManualRecordIcon style={{ fontSize: '10px' }} />
        </a>
      </div>
      <div
      // id='scrollableDiv'
      // style={{
      //   height: '100vh',
      //   overflow: 'auto',
      //   display: 'flex',
      //   flexDirection: 'column-reverse',
      // }}
      >
        <ImageList
          sx={{ width: '100%', height: '100%' }}
          cols={2}
          rowHeight={400}
        >
          <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader
              component='div'
              style={{
                fontFamily: 'montserrat',
                fontSize: '20px',
                color: 'black',
              }}
            >
              New year, new cashmere
            </ListSubheader>
          </ImageListItem>
          {NewItems.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                style={{
                  backgroundColor: 'transparent',
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                }}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <HomeMidpart />
      </div>
    </div>
  );
}

const NewItems = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpFtxcLyPc0PeJg0CqabrloOe17HYTqmjSA&usqp=CAU',
    title: 'Introducing cropped cashmere',
    subtitle: '',
  },
  {
    img: 'https://www.eileenfisher.com/dw/image/v2/BGKB_PRD/on/demandware.static/-/Sites-ef-Library/default/dw1d6abdb4/images/articles/repair%20and%20care/washsweater-hero-v2.jpg?sfrm=jpg',
    title: 'Explore V-neck cashmere',
    subtitle: '',
  },
];
