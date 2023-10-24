import React from "react";

type Props = {
  is: string;
};

function ChatRow({ id }: Props) {
  console.log(id);

  return <div>ChatRow</div>;
}

export default ChatRow;
