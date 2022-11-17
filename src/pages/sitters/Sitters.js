import Header from "../../components/header/Header";
import SittersSearchResults from "../../components/sitters/SittersSearchResults";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import { isAuthenticated } from "../../utils/authHelper";

function Sitters(props) {
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <SittersSearchResults />
    </div>
  );
}

export default mustBeAuthenticated(Sitters);
