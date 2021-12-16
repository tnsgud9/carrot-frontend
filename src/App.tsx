import { Toolbar, AppBar, Grid, Box } from "@mui/material";
import Home from "./pages/Home";
import BottomAppBar from "./pages/Test/components/BottomAppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      <Home />

      <Toolbar />
      <Toolbar />

      <BottomAppBar />
    </main>
  );
};

export default App;
