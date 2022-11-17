import Header from "../../components/header/Header";
import DeleteAccountForm from "../../components/deleteaccountform/deleteaccountform";
import Slideshow from "../../components/slideshow/Slideshow";
import { isAuthenticated } from "../../utils/authHelper";

function DeleteAccount(props) {
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <DeleteAccountForm familyEmail={""} sitterEmail={""}/>
    </div>
  );
}

export default DeleteAccount;