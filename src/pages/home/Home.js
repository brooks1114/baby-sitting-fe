import Header from "../../components/header/Header";
import GridCards from "../../components/gridcards/GridCards";
import { isAuthenticated } from "../../utils/authHelper";

function Home(props) {
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <GridCards />
    </div>
  );
}

export default Home;
