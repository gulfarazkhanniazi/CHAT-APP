import MessageContainer from "../Components/MessageContainer"
import Sidebar from "../Components/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home