import { useState } from "react";
import NoteIcon from "@mui/icons-material/Note";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import PersistentDrawer from "./components/PersistentDrawer";
import Notes from "./pages/Notes";
import { Tasks } from "./pages/Tasks";
import { MenuItem } from "./components/PersistentDrawer/MenuItem";

const pagesMenuItems: MenuItem[] = [
  { name: "Notes", component: <Notes />, icon: <NoteIcon /> },
  {
    name: "Tasks",
    component: <Tasks />,
    icon: <FormatListBulletedIcon />,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(pagesMenuItems[0].name);

  return (
    <>
      <PersistentDrawer
        menuItems={pagesMenuItems}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
