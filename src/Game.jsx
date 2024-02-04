const Game = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#2c3e50]">
      <div className="w-full h-[75vh] bg-stone-800">Screen</div>
      <div>
        <textarea className="w-full h-[10vh] bg-stone-700 text-white rounded outline-none p-2" />
      </div>
    </div>
  );
};

export default Game;
