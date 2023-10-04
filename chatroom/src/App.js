import "./App.css";
import { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  // const [name,setName]=useState("dummy User");
  const [name, setName] = useState("");

  // const [chats,setChats]=useState([{name:'user1',message:'this is test for all people'}]);
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");

  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  const updateHeight = () => {
    const el = document.getElementById("chat");
    if (el) {
    el.scrollTop = el.scrollHeight;
    

    }
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      //  const c=[...chats]
      //  c.push(data.val())
      //setChats(c)
      setChats((chats) => [...chats, data.val()]);
      setTimeout(() => {
         updateHeight();
      }, 5000);
    });
  }, []);

  const sendChat = () => {
    //const chatListRef = ref(db, 'chats');
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });

    // const c=[...chats];
    // c.push( );
    //setChats(c);
    setMsg("");
  };
  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="enter your name"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {name ? (
        <div>
          <h1>User:{name}</h1>
          <div className="chat-container">
            {chats.map((c, i) => (
              <div
                id="chat"
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name}:</strong>
                  <span>{c.message} </span>
                </p>
              </div>
            ))}

            {/* <div className='container'>
    <p className='chatbox'>
        <strong>name:</strong>
        <span>chat message for you</span>
      </p>
    </div> */}
          </div>
          <div className="btm">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="enter your message"
            />
            <button onClick={(e) => sendChat()}>send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
