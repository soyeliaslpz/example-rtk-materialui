// import Link from "next/link";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import HomeIcon from "@mui/icons-material/Home";
// import StarIcon from "@mui/icons-material/Star";
// import ChecklistIcon from "@mui/icons-material/Checklist";
// import SettingsIcon from "@mui/icons-material/Settings";
// import SupportIcon from "@mui/icons-material/Support";
// import LogoutIcon from "@mui/icons-material/Logout";

// const DRAWER_WIDTH = "240px";

// export default function Navbar({ children }) {
//   return (
//     <>
//       <AppBar position='fixed' sx={{ zIndex: 2000 }}>
//         <Toolbar sx={{ backgroundColor: "background.paper" }}>
//           <DashboardIcon
//             sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
//           />
//           <Typography variant='h6' noWrap component='div' color='black'>
//             Next.js App Router - Material UI
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: DRAWER_WIDTH,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: DRAWER_WIDTH,
//             boxSizing: "border-box",
//             top: ["48px", "56px", "64px"],
//             height: "auto",
//             bottom: 0,
//           },
//         }}
//         variant='permanent'
//         anchor='left'
//       >
//         <Divider />
//         <List>
//           {LINKS.map(({ text, href, icon: Icon }) => (
//             <ListItem key={href} disablePadding>
//               <ListItemButton component={Link} href={href}>
//                 <ListItemIcon>
//                   <Icon />
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider sx={{ mt: "auto" }} />
//         <List>
//           {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <Icon />
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// }
