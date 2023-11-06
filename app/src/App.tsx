import { DataProvider } from "./Context/context";
import { Container } from "./component/container";

const App = () => {
  return (
    <>
      <DataProvider>
        <Container />
      </DataProvider>
    </>
  );
};

export default App;
