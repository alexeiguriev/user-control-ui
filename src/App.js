import './App.css';
import { Container, Typography } from "@material-ui/core";
import User from "./components/User";

function App() {
  return (
    <Container maxWidth = "md">
      <Typography
      gutterBottom
      variant="h2"
      align ="center">
        User Api Control App
      </Typography>
      <User/>
    </Container>
  );
}

export default App;
