import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import FoundationIcon from '@mui/icons-material/Foundation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export const sidebarData = [
   
    { 
        title: "Home", 
        icon: <FoundationIcon />, 
        link:"/",
    }, 
    { 
        title: "Profile", 
        icon: <FolderSharedIcon />,
        link:"/profile", 
    }, 
    { 
        title: "Monitor", 
        icon: <MonitorHeartIcon />,
        link:"/monitor", 
    },
    { 
        title: "Support", 
        icon: <LiveHelpIcon />,
        link:"/support", 
    },
    { 
        title: "Search", 
        icon: <SearchIcon />,
        link:"/search", 
    },
  
    { 
        title: "Account", 
        icon: <PersonOutlineIcon />,
        link: "/account",
    },
];
