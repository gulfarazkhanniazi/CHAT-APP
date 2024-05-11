import { useEffect, useState } from "react"

const ConversationStates = () => {
  const [Conversation, setConversation] = useState([])

  useEffect(()=> {
    const getConversation = async() => {
        try {
          const response = await fetch("http://localhost:5000/user/users",{
            method: "GET",
            credentials: 'include', // Include credentials (cookies)
        })

            const data = await response.json();
            console.log(data);
            if (data.error)
                throw new Error(data.error)

            setConversation(data)
        } catch (error) {
            console.log(error);
        }
    };
    getConversation();
  }, [])

  return Conversation;
}

export default ConversationStates