import { useState } from "react";
import NoteIcon from "@mui/icons-material/Note";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";

import PersistentDrawer from "./components/PersistentDrawer";
import Notes from "./pages/Notes";
import { Tasks } from "./pages/Tasks";
import { MenuItem } from "./components/PersistentDrawer/MenuItem";
import { Settings } from "./pages/Settings";

const primaryMenuItems: MenuItem[] = [
  { name: "Notes", component: <Notes />, icon: <NoteIcon /> },
  {
    name: "Tasks",
    component: <Tasks />,
    icon: <FormatListBulletedIcon />,
  },
];

const secondaryMenuItems: MenuItem[] = [
  { name: "Settings", component: <Settings />, icon: <SettingsIcon /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState(primaryMenuItems[0].name);

  return (
    <>
      <PersistentDrawer
        primaryMenuItems={primaryMenuItems}
        secondaryMenuItems={secondaryMenuItems}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
