
import { Square } from "./Square"

export function WinnerModal({winner, restartGame}){

    if (winner === null) return null;

    const winnerText = winner ? `El ganador es ${winner}` : 'Empate';
    return(
        <section className="absolute w-screen h-screen top-0 left-0 grid place-items-center bg-slate-900">
           <div className="bg-[#111] h-72 w-[320px] border-solid border-[2px] border-[#eee] rounded-xl flex flex-col content-center items-center">
               <h2 className="font-bold">{winnerText}</h2>
               <header className="mx-auto my-0 w-fit rounded-xl border-solid border-[#eee] border-[2px] flex gap-4">
                   {winner && <Square isWinnerModal={true}>{winner}</Square>}
               </header>

               <footer>
                   <button onClick={restartGame} className="p-2 bg-transparent font-bold my-4 rounded-sm border-solid border-[#d0c8c8]">
                       Restart Game
                   </button>
               </footer>
           </div>
       </section>
   )
}
