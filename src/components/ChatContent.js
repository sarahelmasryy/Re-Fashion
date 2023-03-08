import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const ChatContent = ({ content, isTyping }) => {
  const { botStyle } = useAppContext();
  const messagesEndRef = React.useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(scrollToBottom, [content]);

  return (
    <Wrapper className="content">
      {content.map((con, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="chat chat-start" key={idx}>
              {botStyle === 0 ? (
                <div className="chat-bubble chat-bubble-error"
                style={{
                  backgroundColor: '#95f39b',
                  borderRadius: '10px',
                }}>{con}</div>
                
              ) : botStyle === 1 ? (
                <div className="chat-bubble chat-bubble-success"
                style={{
                  backgroundColor: '#ffebcd',
                  borderRadius: '10px',
                }}>{con}</div>
              ) : (
                <div className="chat-bubble chat-bubble-primary"
                style={{
                  backgroundColor: '#ffebcd',
                  borderRadius: '10px',
                }}>{con}</div>
              )}
              <p/>
            </div>
          );
        } else {
          return (
            <div className="chat chat-end" key={idx}>
              <p/>
              <div className="chat-bubble"
               style={{
                backgroundColor: '#15c01f',
                borderRadius: '10px',
              }}>{con}</div>
              <p/>
            </div>
            
          );
        }
      })}
      {isTyping && <TypingIndicatorWrapper className="text-slate-400">Re-Fashion is typing ...</TypingIndicatorWrapper>}
      <div ref={messagesEndRef} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  height: 80vh;
  overflow: scroll;
  
`;

const TypingIndicatorWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  align-items: center;
  // background-color: red
`;

export default ChatContent;
