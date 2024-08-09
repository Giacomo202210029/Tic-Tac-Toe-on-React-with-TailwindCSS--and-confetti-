import { useState } from 'react'
import { useEffect } from 'react'

import { TURNS } from './Game/valueObjects/Constants'
import { Square } from './Game/Componentes/Square'
import { WinnerModal } from './Game/Componentes/WinnerModal'
import { validateWinner, isBoardFull } from './Game/extensions/Validation'
import confetti from 'canvas-confetti'

import './App.css'



function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index)=>{
    if(board[index] || winner) return

    const newBoard = [...board]; //separo todas las casillas

    newBoard[index] = turn; //obtengo la casilla que me ha pasado

    setBoard(newBoard) //actualizo la casilla

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; //si el turno es igual a x cambia a o, sino es x

    setTurn(newTurn) //actualizo el turno con el dato nuevo

    const newWinner = validateWinner(newBoard); //se valida si hay un ganador

    if(newWinner){
      confetti(); 
      setWinner(newWinner) //si hay un ganador se actualiza el estado
    }
    else if(isBoardFull(newBoard)){
      setWinner(false) //si la tabla esta llena es empate. 
    }
  }

  const restartGame = () =>{
    setBoard(Array(9).fill(null))

    setTurn(TURNS.X)

    setWinner(null)
  }

  useEffect(() => {
    console.log('Winner', winner)
  }, [winner])

  return (
    <>
      <main className='w-fit mx-10 my-auto text-center items-center justify-center'>
        <h1 className='text-[#eee] font-bold'>El juego Michi</h1>
        <button onClick={restartGame} className='px-[12px] py-[8px] m-[25px] bg-transparent border-[2px] border-solid
          border-[#eee] text-[#eee] w-[100px] rounded-sm [transition:0.2s] font-bold cursor-pointer hover:bg-[#eee] hover:text-[#222]'>
            Restart Game
        </button>

        <section id='game' className='grid gap-3 grid-cols-[repeat(3,_1fr)]'>
          {
            board.map((value, index) => (
              <Square key={index} index={index} updateBoard={updateBoard} isWinnerModal={false}>
                {value}
              </Square>
            ))
          }
        </section>

        <section id='turn' className='flex justify-center mx-12 my-5 w-fit relative rounded-xl'>
          <Square isWinnerModal={false}>X</Square>

          <Square isWinnerModal={false}>O</Square>
        </section>

        <WinnerModal winner={winner} restartGame={restartGame}/>

      </main>
    </>
  )
}

export default App