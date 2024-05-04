import { TiMessage } from "react-icons/ti";

const NotSlected = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
        <div className=" px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 Gul Faraz</p>
            <p>Select a Chat to Start Message</p>
            <TiMessage className=" text-3xl md:text-6xl text-center"/>
        </div>
    </div>
  )
}

export default NotSlected