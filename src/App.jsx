import React from 'react'
import ReactDOM from 'react-dom';
import {Home} from 'micro_frontend_1/Home'

// const Home = React.lazy(async () => await import('micro_frontend_1/Home'));


export const App = () => {

    const names = ['Lean', 'Diego', 'Leo', 'Facu'];

    return (
        <div>
           <h1>Chau mundo</h1>
           <Home names={names}/> 
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));