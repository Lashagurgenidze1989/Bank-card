import { useState } from "react";
import ReactInputMask from "react-input-mask";

export default function Confirm(props: ConfirmProps) {
  const [holderError, setHolderError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let hasError = false;
    if (!props.holder) {
      setHolderError("can't be empty");
      hasError = true;
    }

    if (props.number.replaceAll(" ", "").length <= 15) {
      setNumberError("can't be less then 16");
      hasError = true;
    }

    if (!props.number) {
      setNumberError("can't be empty");
      hasError = true;
    }

    if (!props.month) {
      setDateError("can't be blank");
      hasError = true;
    }

    if (!props.year) {
      setYearError("can't be blank");
      hasError = true;
    }

    if (!props.cvc) {
      setCvcError("can't be blank");
      hasError = true;
    }

    if (!hasError) {
      props.setConfirm(true);
    }
  };

  return (
    <form action="submit">
      <div>
        <label htmlFor="name">Cardholder Name</label>
        <input
          onChange={(event) => {
            props.setHolder(event.target.value);
            setHolderError("");
          }}
          type="text"
          name="name"
          placeholder="e.g. Jane Appleseed"
        />
      </div>
      <p>{holderError}</p>

      <div>
        <label htmlFor="number">Card Number</label>
        <ReactInputMask
          mask={"9999 9999 9999 9999"}
          maskChar={null}
          type="text"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(event) => {
            props.setNumber(event.target.value);
            setNumberError("");
          }}
        />
      </div>
      <p>{numberError}</p>

      <div>
        <div>
          <div>
            <label htmlFor="exp">exp. date</label>
            <ReactInputMask
              mask={"99"}
              maskChar={null}
              type="text"
              name="exp"
              id="exp"
              placeholder="MM"
              onChange={(event) => {
                props.setMonth(event.target.value);
                setDateError("");
              }}
            />
          </div>

          <div>
            <label htmlFor="my">(MM/YY)</label>
            <ReactInputMask
              mask={"99"}
              maskChar={null}
              type="text"
              name="my"
              id="my"
              placeholder="YY"
              onChange={(event) => {
                props.setYear(event.target.value);
                setYearError("");
              }}
            />
          </div>
        </div>
        <p>{dateError || yearError}</p>

        <div>
          <label htmlFor="cvc">cvc</label>
          <ReactInputMask
            mask={"999"}
            maskChar={null}
            type="text"
            name="cvc"
            id="cvc"
            placeholder="e.g. 123"
            onChange={(event) => {
              props.setCvc(event.target.value);
              setCvcError("");
            }}
          />
        </div>
        <p>{cvcError}</p>
      </div>

      <button type="submit" onClick={handleSubmit}>
        Confirm
      </button>
    </form>
  );
}

interface ConfirmProps {
  setHolder: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  holder: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}
