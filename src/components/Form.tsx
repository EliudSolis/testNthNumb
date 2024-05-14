import "../App.css";
interface Props {
  setNumber: (value: number) => void;
}

const Form = ({ setNumber }: Props) => {
  const submit = (e: any) => {
    e.preventDefault();
    const number = e.target.number.value;

    setNumber(number);

    console.log(number);
  };

  return (
    <form className="form_major" onSubmit={submit}>
      <div className="title_container">
        <h1 className="title_major">Bienvenido</h1>
        <h2>Esta calculadora ejecuta la formula:</h2>
        <span className="title_formula">serie(n) = 3primo(n) * triangular(n) / fibonacci(n-2) </span>
        <br />
      </div>
      <div className="input_container">
      <input className="input_form" type="number" id="number" min={3} />
      <button className="button_form">Calcular</button>
      </div>
        <span className="subtext">
          Por la naturaleza de la operación, solo prodrás ingresar números
          mayores a 2 y menores a 30
        </span>
    </form>
  );
};

export default Form;
