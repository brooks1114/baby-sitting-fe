import Header from "../../components/header/Header";
import SittersSearchResults from "../../components/sitters/SittersSearchResults";
import Slideshow from "../../components/slideshow/Slideshow";
import { isAuthenticated } from "../../utils/authHelper";

function Sitters(props) {
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <Slideshow />
      <SittersSearchResults />
    </div>
  );
}

export default Sitters;
