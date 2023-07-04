import { useState } from "react";

const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue)

    const Toggle =()=>{
        setShow(!show)
    }
    return{show,Toggle}
}
export default useToggle