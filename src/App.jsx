import Attribution from "./Attribution";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div
      className=" bg-Greenlighter overflow-hidden h-screen flex flex-col justify-center gap-5"
      // className="bg-green-500 h-screen  flex  justify-center items-center flex-col gap-5"
    >
      <Form />
      <Attribution />
    </div>
  );
}

export default App;
