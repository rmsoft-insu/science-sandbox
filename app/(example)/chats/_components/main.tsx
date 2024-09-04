import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { SocketIndicator } from "./socket-indicator";

export const MainComponent = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="h-[580px] w-[400px] space-y-5 rounded-md bg-white p-4">
          <div className="flex w-full justify-between border-b-2 p-2">
            <h3 className="text-xl font-bold">채팅</h3>
            <SocketIndicator />
          </div>
          <div className="h-[400px] rounded-md bg-slate-50 p-2">
            <ChatMessage />
          </div>
          <div className="flex h-[48px] flex-col justify-end">
            <ChatInput />
          </div>
        </div>
      </div>
    </>
  );
};
