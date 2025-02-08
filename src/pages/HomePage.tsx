import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <header>
      <h1>Hello everybody my name is Markiplier</h1>
      <Link to="/about">This is about</Link>
    </header>
  );
}
