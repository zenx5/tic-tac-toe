import { FICHA_X, FICHA_O, TAG_NONE, TAG_O, TAG_X } from "../tools/constants";

export default function Box({ position, tag, onClick}) {

    const renderTag = ( userId ) => {
        switch( userId ) {
            case FICHA_X: return TAG_X;
            case FICHA_O: return TAG_O;
            default: return TAG_NONE
        }
    }

    return <button
        data-position={position}
        data-tag={tag}
        onClick={()=>onClick(position, tag)}
        className="shadow-purple-950 shadow-md hover:shadow text-[4rem] flex justify-center items-center w-[150px] h-[150px] border border-purple-700 p-2 hover:bg-purple-950 text-purple-700 hover:text-black font-bold"
    >
        { renderTag( tag ) }
    </button>
}