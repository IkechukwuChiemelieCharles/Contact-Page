import Attribution from "./Attribution";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="bg-green-500 h-full  flex  justify-center items-center flex-col gap-5">
      <Form />
      <Attribution />
    </div>
  );
}

export default App;
