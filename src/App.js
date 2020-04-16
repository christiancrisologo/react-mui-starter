import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ChessPage from "ChessPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ChessPage />
        </ThemeProvider>
    );
}

export default App;
