import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/recipe1">Recipe1</Link>
          </li>
          <li>
            <Link to="/recipe2">Recipe2</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Home;