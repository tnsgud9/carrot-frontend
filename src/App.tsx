import Test from "./pages/Test";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Grid } from "@mui/material";

const App = () => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container>
        내용
        <Test />
      </Grid>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button>홈</Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button>동네생활</Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button>내 근처</Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button>채팅</Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button>나의 당근</Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default App;
