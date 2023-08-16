import Board from './components/Board.js'

function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col w-screen bg-black">
      <h1 className="text-5xl font-bold text-white">Tic Tac <span className="text-purple-700">Toe</span></h1>
      <span className="p-1 w-screen">
        <Board />
      </span>
      <p className="text-white italic m-2">by Zenx5</p>
    </div>
  );
}

export default App;
