import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Portrait';
import TrendingIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction className="roster" label="Roster" icon={<FavoriteIcon />} />
      <BottomNavigationAction className="ranking" label="Schedule/ Ranking" icon={<TrendingIcon />} />
    </BottomNavigation>
  );
}

export default Navbar;