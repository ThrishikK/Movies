import "./HeadingH1.css";

function HeadingH1({ text }) {
  const textLength = text.length;
  return (
    <h1
      className="heading-typing"
      style={{
        "--steps": textLength,
        "--final-width": `${textLength}ch`,
      }}
    >
      {text}
    </h1>
  );
}

export default HeadingH1;
