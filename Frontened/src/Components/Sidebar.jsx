import Conservations from "./Conservations"
import Logout from "./Logout"
import SearchBar from "./SearchBar"

const Sidebar = () => {
  return (
    <div className=" border-r border-slate-500 p-4 flex flex-col">
        <SearchBar/>
        <div className="divider px-3"></div>
        <Conservations/>
        <Logout/>
    </div>
  )
}

export default Sidebar