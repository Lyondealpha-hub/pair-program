import { DataProvider } from "./Context/context";
import { Container } from "./component/TaskBoard/container";

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
