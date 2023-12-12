interface HeaderProps {
  holder: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <img src="/bg-main-mobile.png" alt="bg-mobile" />
      <img src="/bg-card-back.png" alt="card-back" />
      <img src="/bg-card-front.png" alt="card-front" />

      <p>{props.holder ? props.holder : "JANE APPLESEED"}</p>
      <p>{props.number ? props.number : "0000 0000 0000 0000"}</p>
      <p>{`${props.month ? props.month : "00"}/${
        props.year ? props.year : "00"
      }`}</p>
      <p>{props.cvc ? props.cvc : "000"}</p>
    </div>
  );
}
