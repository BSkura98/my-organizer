import NoteIcon from "@mui/icons-material/Note";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import PersistentDrawer from "./components/PersistentDrawer";
import Notes from "./pages/Notes";
import { Tasks } from "./pages/Tasks";

function App() {
  return (
    <>
      <PersistentDrawer
        menuItems={[
          { name: "Notes", component: <Notes />, icon: <NoteIcon /> },
          {
            name: "Tasks",
            component: <Tasks />,
            icon: <FormatListBulletedIcon />,
          },
        ]}
      />
    </>
  );
}

export default App;
