import React from 'react'


import {Cards,Charts,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
class App extends React.Component{
    state={
        data:{}
    }
    async componentDidMount()
    {
        const fetchRecord=await fetchData();
        this.setState({data:fetchRecord})
        console.log(fetchRecord)

    }
    render()
    {
        const {data}=this.state
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Charts />
                
            </div>
        )
    }
}

export default App