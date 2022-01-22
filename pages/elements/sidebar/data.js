import {
  faBolt,
  faCheckCircle,
  faCalendarAlt,
  faUserFriends,
  faTasks,
  faHome, 
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dataMenu = [
  {
    title: 'Activity', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faBolt} style={{ color: "#888c97" }}/>
  }, 

  {
    title: 'My Tasks', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#888c97" }}/>
  }, 

  {
    title: 'Overview', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faHome} style={{ color: "#888c97" }}/>
  }, 

  {
    title: 'Project', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faTasks} style={{ color: "#888c97" }}/>
  }, 

  {
    title: 'Calendar', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#888c97" }} />
  }, 

  {
    title: 'Teams', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faUserFriends} style={{ color: "#888c97" }} />
  }, 

  {
    title: 'Campaign', 
    path: '#', 
    icon: <FontAwesomeIcon icon={faBullhorn} style={{ color: "#888c97" }}/>
  }
]

export default dataMenu

