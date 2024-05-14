import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import NthNumber from "./components/NthNumber";
import Result from "./components/Result";

function App() {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  return (
    <>
      {number < 32 ? (
        <div className="app">
          <NthNumber n={number} setResult={setResult} />
          <Form setNumber={setNumber} />
          {number > 2 && <Result n={result} />}
        </div>
      ) : (
        <div className="app_error">
          <h1 className="app_error_title">Oops! Ese numero es muy grande</h1>
          <button className="app_error_button" onClick={() => setNumber(0)}>
            Reiniciar
          </button>
        </div>
      )}
    </>
  );
}

export default App;
