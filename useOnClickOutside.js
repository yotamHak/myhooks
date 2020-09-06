// https://github.com/chrisjpatty/crooks/blob/master/src/useOnClickOutside.js
import React from 'react'

// Custom hook for clicking outside of an element
// Usage: 
// const outsideRef = useOnClickOutside(handleClickOutside) 
// <div ref={outsideRef}> I'm a blue box </div>
// 
// Important: For performance reasons, you may not want to always listen for clicks outside of an element.
// const [isDisabled, setIsDisabled] = useState(false)
// const outsideRef = useOnClickOutside(handleClickOutside, isDisabled)
// <div ref={outsideRef}> I'm a blue box </div>
export default (onClickOutside, disabled) => {
    const ref = React.useRef()

    React.useEffect(() => {
        if (!disabled) {
            window.addEventListener('click', checkForClickOutside)
            return () => {
                window.removeEventListener('click', checkForClickOutside)
            }
        } else {
            window.removeEventListener('click', checkForClickOutside)
        }
    }, [disabled])

    const checkForClickOutside = e => {
        if (ref.current) {
            if (!ref.current.contains(e.target)) {
                onClickOutside()
            }
        }
    }
    return ref;
}