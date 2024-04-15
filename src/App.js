import "./App.css";
// import Ecommerce from "./JsMastery_Dashboard/pages/Ecommerce";
import Ed_Roh_Dashboard from "./EdRoh_Dashboard";
import { ColorModeContext, useMode } from "./EdRoh_Dashboard/theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="main">
          <ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme}> */}
      <Ed_Roh_Dashboard />
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
    </div>
  );
}

export default App;
