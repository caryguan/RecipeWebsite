import { Link } from "react-router-dom";

export interface IAppProps {
}

export default function NavBar (props: IAppProps) {
  return (
    <Link to="/">Go Home</Link>
  );
}
