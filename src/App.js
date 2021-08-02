import { 
  Button, 
  createTheme, 
  ThemeProvider, 
  makeStyles, 
  Hidden, 
  Typography, 
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';

import './App.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-material-ui-carousel';

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#F0B010"
    },
  },
  typography: {
    fontFamily: "Arial"
  },
  overrides:{
    MuiButton:{
      containedPrimary:{
        margin: "100px"
      }
    }
  }
});

const useStyle = makeStyles(theme => ({
  btnContainer: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    }
  }
}));

function App() {

  const classes = useStyle();

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">

        <Typography
          variant="h6"
          align="center"
        >
          Demostración Hidden y breakpoint
        </Typography>
        <div className={classes.btnContainer}>
          <Hidden smUp>
            <Button variant="contained" color="primary">
              Pequeña
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button variant="contained" color="primary">
              Grande
            </Button>
          </Hidden>
        </div>

        <Typography
          variant="h6"
          align="center"
        >
          Demostración Accordion
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Typography
        variant="h6"
        align="center"
      >
        Demostración Carousel
      </Typography>
      <Carousel animation="slide" navButtonsAlwaysVisible>
        <h1 style={{background: "#CCCCCC"}}>
          Hola
        </h1>
        <h1 style={{background: "#CCCCCC"}}>
          Mundo
        </h1>
      </Carousel>

      </div>
    </ThemeProvider>
  );
}

export default App;
