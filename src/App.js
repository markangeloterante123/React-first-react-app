/*importa react ito and magiging controller
    using the useState
*/
import React, { useState } from 'react'

//example of import of css
import './App.css'

//import and Card
import Card from './Card'

const App = () => {
    /*example of declaring javascript variable */
    const  name =  'mark' //string
    const  month = 112017 //interger
    
    //set using the useState
    const [count, setCount] = useState(0)
    const [user, setUser] = useState('')
    /*use for increment onClick button*/
    
    const increment = () => {
        setCount(count + 1)
    }
    
    // for input value in input field
    const handleOnChange = (e) => {
        setUser(e.target.value)
    }
    // to console log
    console.log("user: ", user)


    
    //--- sa return ito nmn ung didisplay sa public index.html id="root"
    return (
        <>
            <div>Hi {name} {month}</div>
            <div>Count: {count} </div>
            <br />
            <button onClick={increment}>Increment</button>
            <br />
            <input name="user" onChange={handleOnChange} value={user} />
            <br />
            <div className="app-main">
               <Card name="Mark Angelo Terante" age={26} gender="Male"/>
               <Card name="Maggielyn Montero" age={26} gender="Female"/>
               <Card name="Aden Robis" age={27} gender="Male"/>
               <Card name="Paul Pinalosa" age={22} gender="Male"/>
            </div>
        </>
       
    )
}

export default App