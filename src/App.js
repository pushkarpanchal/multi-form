import "./App.css";
import Main from "./Main";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: "10vh" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", p: "2rem" }}>
          <Main />
        </Box>
      </Container>
    </div>
  );
}

export default App;
