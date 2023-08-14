import GlobalState from "./Contexts/GlobalState";
import Router from "./Router/Router";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;