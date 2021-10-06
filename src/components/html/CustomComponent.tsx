import React from 'react'
import Greet from '../Greet'


const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.isLoggedIn} {props.messageCount} {props.name}
        </div>
    )
}

export default CustomComponent
