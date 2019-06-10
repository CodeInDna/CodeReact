import {DRAWER_WIDTH} from './../constants.js';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    display: 'flex',
    width: "100%",
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
  	height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
  	width: "90%",
  	height: "100%",
  	display: "flex",
  	flexDirection: "column",
  	justifyContent: "center",
  	alignItems: "center"
  },
  btns: {
  	width: "100%",
  	display: "flex",
  	justifyContent: "space-between"
  },
  btn: {
  	width: "48%"
  }
});

export default styles;