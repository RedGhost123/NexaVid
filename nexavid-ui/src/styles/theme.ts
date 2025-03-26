import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff6f61" },
    secondary: { main: "#00bcd4" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
  typography: { fontFamily: "Inter, sans-serif" },
});

export default theme;
