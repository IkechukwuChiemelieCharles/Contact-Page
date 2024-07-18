import Attribution from "./Attribution";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="bg-Greenlighter w-full h-full flex  justify-center pt-20 flex-col gap-5">
      {/* <h1 className="text-3xl font-bold underline text-Greenmedium font-Karla">
        Hello world!
      </h1> */}
      <Form />
      <Attribution />
    </div>
  );
}

export default App;
