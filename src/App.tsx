import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");
  console.log("🚀 ~ App ~ value:", value);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const inputUpperCase = inputValue.toUpperCase();

    setValue(inputUpperCase);
  };

  return (
    <div className="container">
      <h1>Inputs: </h1>

      <input
        className="text-input"
        value={value}
        onChange={handleChangeInput}
      />

      <h2>{value}</h2>
    </div>
  );
}

export default App;
