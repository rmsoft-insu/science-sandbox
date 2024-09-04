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
          <div className="h-[400px] rounded-md bg-slate-50 p-2">채팅 내용</div>
          <div className="h-[48px] bg-indigo-500">입력창</div>
        </div>
      </div>
    </>
  );
};
