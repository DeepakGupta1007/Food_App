import React from 'react'
import ReactDOM from 'react-dom/client';
import "/index.css"
import Header from './components/header';
import Body from './components/Body';







const AppLayout =()=>{
    return(
        <div className='app'>
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>);