import ConversationStates from "../States/ConversationStates"
import ConsevartionTemplate from "./ConsevartionTemplate"

const Conservations = () => {
  // const conversation = 
  ConversationStates();
  // console.log(conversation);
  return (
    <div className=" py-2 flex flex-col overflow-auto">
        <ConsevartionTemplate/>
        <ConsevartionTemplate/>
        <ConsevartionTemplate/>
        <ConsevartionTemplate/>
        <ConsevartionTemplate/>
    </div>
  )
}

export default Conservations