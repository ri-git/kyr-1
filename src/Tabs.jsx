import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './components/home/home'
import Feedback from './components/home/feedback'
import Credits from './components/home/credits'
import Education from './components/home/education'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Employment from './components/employment';
import Health from './components/health'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  AppBarStyle: {
    backgroundColor: "#100a33",
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBarStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Health" {...a11yProps(2)} />
          <Tab label="Employment" {...a11yProps(3)} />
          <Tab label="Miscellaneous" {...a11yProps(4)} />
          <Tab label="Feedback" {...a11yProps(5)} />
          <Tab label="Credits" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Education/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Health />
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Employment />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Miscellaneous
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Feedback/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Credits/>
      </TabPanel>
    </div>
  );
}
