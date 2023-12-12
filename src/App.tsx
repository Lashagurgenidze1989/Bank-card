import { useState } from "react";
import Confirm from "./components/Confirm";
import Header from "./components/Header";
import Continue from "./components/Continue";

function App() {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <Header
        holder={holder}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      {!confirm ? (
        <Confirm
          holder={holder}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
          setHolder={setHolder}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
          setConfirm={setConfirm}
        />
      ) : (
        <Continue />
      )}
    </>
  );
}

export default App;
