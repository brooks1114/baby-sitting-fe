import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
// import GridCardsSitters from "../../components/sitters/GridCardsSitters";
import SittersSearchResults from "../../components/sitters/SittersSearchResults";
import { isAuthenticated } from "../../utils/authHelper";

function Home(props) {
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <Slideshow />
      <SittersSearchResults />
    </div>
  );
}

export default Home;
