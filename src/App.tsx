import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Navigation
      toggleMode={function (): void {
        throw new Error("Function not implemented.");
      }}
      mode={"light"}
    />
  );
};

export default App;
