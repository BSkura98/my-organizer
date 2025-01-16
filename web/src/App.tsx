import PersistentDrawer from "./components/PersistentDrawer";
import Notes from "./pages/Notes";
import { Tasks } from "./pages/Tasks";

function App() {
  return (
    <>
      <PersistentDrawer
        menuItems={[
          { name: "Notes", component: <Notes /> },
          { name: "Tasks", component: <Tasks /> },
        ]}
      />
    </>
  );
}

export default App;
