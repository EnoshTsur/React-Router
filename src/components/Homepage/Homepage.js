import React from 'react'
import Mobile from '../Mobile/Mobile'
import Desktop from '../Desktop/Desktop'
import Button from '../Button/Button';

export default function Homepage() {

    const [ toggle, setToggle, ] = React.useState(false)

    const isInitialMount = React.useRef(true)

    React.useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            alert(`Toggle ${toggle ? 'On' : 'Off'}`)
         }
    }, [toggle])

    return (
       <div>
           <Mobile />
           <Desktop />
           <div style={{
               textAlign: 'center'
           }}>
                <Button 
                        title="Click Me"
                        onClick={() => setToggle(pre => !pre)}
                        type={toggle && "success"}
                    />
            </div>
       </div>
    )
}
