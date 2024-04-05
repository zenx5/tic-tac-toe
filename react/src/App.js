import Board from './components/Board.js'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col w-screen bg-black">
      <h1 className="text-5xl font-bold text-white">Tic Tac <span className="text-purple-700">Toe</span></h1>
      <span className="p-1 w-screen">
        <Board />
      </span>
      <p className="text-white italic m-2 text-md">by <a href="https://zenx5.pro" target="_blank" rel="noreferrer" className="underline hover:text-blue-500">Zenx5</a></p>
    </div>
  );
}
