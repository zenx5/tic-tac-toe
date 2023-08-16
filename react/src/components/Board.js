import { useEffect, useState } from 'react'
import { FICHA_O, FICHA_X, FICHA_NONE, winsArray } from '../tools/constants'

export default function Board() {
    const [user, setUser] = useState(FICHA_X)
    const [positions, setPositions] = useState(Array(9).fill(FICHA_NONE))
    const [winner, setWinner] = useState(0)

    useEffect(()=>{
        winsArray.forEach( line => {
            const [p1, p2, p3] = line
            console.log(p1, p2, p3)
            const row = positions.filter( (tag, index) => (index===p1 || index===p2 || index===p3) )
            console.log(row)
            if( !row.map( tag => tag===FICHA_O ).includes(false) ) {
                setWinner( prev => FICHA_O );
            }
            if( !row.map( tag => tag===FICHA_X ).includes(false) ) {
                setWinner( prev => FICHA_X );
            }
            if( !positions.includes( 0 ) ) {
                setWinner( 3 )
            }
        })
    },[positions])

    const setTag = (index) => {
        if( positions[ index ]===0 ) {
            setPositions( prev => prev.toSpliced(index, 1, user) )
            if( winner===0 ) {
              if( user === FICHA_X ) setUser( prev => FICHA_O )
              else setUser( prev => FICHA_X)
            }
        }
    }

    const renderTag = ( userId ) => {
        switch( userId ) {
            case FICHA_X: return "X";
            case FICHA_O: return "O";
            default: return "";
        }
    }

    const reset = () => {
        setWinner( prev => 0 )
        setUser( prev => FICHA_X )
        setPositions( Array(9).fill(0) )
    }

    return <div className="flex flex-col gap-2 p-2 mx-auto w-fit">
        <div className="flex flex-row gap-3">
            <div onClick={()=>setTag( 0 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[0] ) }</div>
            <div onClick={()=>setTag( 1 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[1] ) }</div>
            <div onClick={()=>setTag( 2 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[2] ) }</div>
        </div>
        <div className="flex flex-row gap-3">
            <div onClick={()=>setTag( 3 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer" >{ renderTag( positions[3] ) }</div>
            <div onClick={()=>setTag( 4 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer" >{ renderTag( positions[4] ) }</div>
            <div onClick={()=>setTag( 5 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer" >{ renderTag( positions[5] ) }</div>
        </div>
        <div className="flex flex-row gap-3">
            <div onClick={()=>setTag( 6 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[6] ) }</div>
            <div onClick={()=>setTag( 7 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[7] ) }</div>
            <div onClick={()=>setTag( 8 )}  className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold cursor-pointer">{ renderTag( positions[8] ) }</div>
        </div>
        { winner!==0 && <div className="absolute w-[450px] h-[450px] m-3 flex justify-center items-center text-[2rem] bg-[#050505dd] text-purple-700 shadow-lg rounded-lg cursor-pointer" onClick={()=>reset()}>
            { winner===1 && <span>Ganó Jugador X</span>}
            { winner===2 && <span>Ganó Jugador O</span>}
            { winner===3 && <span>No hay ganador</span>}
        </div>}
    </div>

}