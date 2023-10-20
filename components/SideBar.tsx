import NewChat from "./NewChat";

function SideBar() {
  return (
    <div>
      <div className="flex-1">
        <div className="flex  flex-col p-2">
          {/* New Chat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Chat through the ChatRow */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
