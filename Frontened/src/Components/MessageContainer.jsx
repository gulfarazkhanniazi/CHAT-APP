import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NotSlected from "./NotSlected"

const MessageContainer = () => {
    const Selected = false;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {Selected ? (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To: </span>
                        <span className="text-gray-900 font-bold">Gul Faraz</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            ) : (
                <NotSlected />
            )}
        </div>
    );
};


export default MessageContainer
