
import Dashboard from "@material-ui/icons/Dashboard";
import PinDropIcon from '@material-ui/icons/PinDrop';
import FaceIcon from '@material-ui/icons/Face';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Login from "views/Login/login.js";

import News from "views/News/index";
import Comparation from "views/Comparation/index";
import Intertopic from "views/Intertopic/index";
import Map from "views/Map/index";
import ImageUpload from "views/Face/";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Views Operations",
   
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/comparation",
    name: "Comparations",
    
    icon: EqualizerIcon,
    component: Comparation,
    layout: "/admin"
  },
  {
    path: "/intertopic",
    name: "Intertopic",
   
    icon: MultilineChartIcon,
    component: Intertopic,
    layout: "/admin"
  },
  {
    path: "/actionsMap",
    name: "Maps",
   
    icon: PinDropIcon,
    component: Map,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News",
 
    icon: LibraryBooks,
    component: News,
    layout: "/admin"
  },
  {
    path: "/face",
    name: "FaceReconigtion",
 
    icon: FaceIcon,
    component: ImageUpload,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Contact Us",
   
    icon: MailOutlineIcon,
    component: UserProfile,
    layout: "/admin"
  },  
  {
    path: "/login",
    name: "Sign off",
   
    icon: PowerSettingsNewIcon,
    component: Login,
    layout: "/admin"
  }
 
];

export default dashboardRoutes;
