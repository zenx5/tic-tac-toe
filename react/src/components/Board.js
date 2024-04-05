import { useState } from 'react'
import Box from './Box'
import { FICHA_O, FICHA_X, FICHA_NONE, winsArray, FICHA_DRAW } from '../tools/constants'

export default function Board() {
    const [user, setUser] = useState(FICHA_X)
    const [positions, setPositions] = useState(Array(9).fill(FICHA_NONE))
    const [winner, setWinner] = useState(FICHA_NONE)

    const checkWinner = (newPositions) => {
        const procesedArray = winsArray.map( ([position1, position2, position3]) => {
            if(
                newPositions[position1]===FICHA_X &&
                newPositions[position2]===FICHA_X &&
                newPositions[position3]===FICHA_X
            ) return FICHA_X
            else if (
                newPositions[position1]===FICHA_O &&
                newPositions[position2]===FICHA_O &&
                newPositions[position3]===FICHA_O
            ) return FICHA_O
            else return FICHA_NONE
        })
        if( procesedArray.includes(FICHA_X) ) setWinner( prev => FICHA_X )
        else if( procesedArray.includes(FICHA_O) ) setWinner( prev => FICHA_O )
        else if( !newPositions.includes( FICHA_NONE ) ) setWinner( prev => FICHA_DRAW )
    }

    const setTag = (index) => {
        if( positions[ index ]===FICHA_NONE && winner===FICHA_NONE ) {
            const newPositions = positions.toSpliced(index, 1, user)
            setPositions( prev => newPositions )
            setUser( prev => user === FICHA_X ? FICHA_O : FICHA_X )
            return newPositions
        }
        return positions
    }

    const reset = () => {
        setWinner( prev => 0 )
        setUser( prev => FICHA_X )
        setPositions( Array(9).fill(0) )
    }

    const handlerSetTag = ( tag ) => {
        const result = setTag( tag )
        checkWinner(result)
    }

    return <div className="flex flex-col gap-2 p-2 mx-auto w-fit">
        {Array(3).fill(0).map((_,i)=>i).map( index => <div className="flex flex-row gap-3" key={index}>
            {
                Array(3)
                    .fill(0)
                    .map((_,i)=>i)
                    .map( index2 => <Box
                        key={index*3+index2}
                        position={index*3+index2}
                        tag={positions[index*3+index2]}
                        onClick={handlerSetTag} /> )
            }
        </div>)}
        { winner!==0 && <div className="absolute w-[450px] h-[450px] m-3 flex justify-center items-center text-[2rem] bg-[#050505dd] text-purple-700 shadow-lg rounded-lg cursor-pointer" onClick={()=>reset()}>
            { winner===1 && <span>Ganó Jugador X</span>}
            { winner===2 && <span>Ganó Jugador O</span>}
            { winner===3 && <span>No hay ganador</span>}
        </div>}
    </div>

}