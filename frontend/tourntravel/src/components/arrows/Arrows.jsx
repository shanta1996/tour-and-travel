import React from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Arrows = () => {
    return (
        <>
            <button>
                <FcPrevious />
            </button>
            <button>
                <FcNext />
            </button>
        </>
    )
}

export default Arrows