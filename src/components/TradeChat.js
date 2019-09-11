import React, { useState, useEffect } from "react";

const TradeChat = () => {
  const [chat, setChat] = useState("");
  const [chatArr, setChatArr] = useState([]);
  const [pos, setPos] = useState("");

  useEffect(() => {
    const objDiv = document.getElementById("chatdiv");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [chatArr]);

  const handleSubmit = e => {
    e.preventDefault();
    if (chat !== "") {
      setChatArr([...chatArr, chat]);
      console.log(chatArr);
      setChat("");
    } else {
      return null;
    }
  };

  return (
    <>
      <div
        class="card shadow-sm"
        id="chatdiv"
        style={{
          height: "320px",
          overflowY: "auto",
          backgroundColor: "#E8EAF6"
        }}
      >
        <div class="card-body">
          <div
            style={{
              paddingBottom: "10px",
              bottom: "0",
              position: "sticky"
            }}
          >
            {chatArr.map(item => {
              return (
                <p>
                  <span
                    style={{
                      color: "#303F9F",
                      fontWeight: "600",
                      position: "sticky",
                      bottom: "0"
                    }}
                  >
                    Chiranjeeb:
                  </span>{" "}
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ bottom: "0" }} width="auto">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="share your trade secret ;) "
            value={chat}
            onChange={e => setChat(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default TradeChat;
