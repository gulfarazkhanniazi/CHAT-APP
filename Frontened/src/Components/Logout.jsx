import { BiLogOut } from "react-icons/bi";
import { logOut } from "../States/UserStates";
import { UseAuthContext } from "../context/userContext";

const Logout = () => {
  const { setAuthUser } = UseAuthContext()
  const handleOnClick = (e) => {
    e.preventDefault();
    logOut(setAuthUser);
  }
  return (
    <div className=" mt-auto">
        <BiLogOut onClick={handleOnClick} className=" w-6 h-6 text-white cursor-pointer"/>
    </div>
  )
}

export default Logout