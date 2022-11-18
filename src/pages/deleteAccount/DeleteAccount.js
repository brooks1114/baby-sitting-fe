import DeleteAccountForm from "../../components/deleteaccountform/deleteaccountform";
import Header from "../../components/header/Header";
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