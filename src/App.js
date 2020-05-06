import React from 'react'


import {Cards,Charts,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
class App extends React.Component{
    state={
        data:{},
        country:''
    }
    handleCountryChange=async(country)=>{
        const fetchRecord=await fetchData(country)
        this.setState({data:fetchRecord,country:country})
        console.log(country)
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
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts />
                
            </div>
        )
    }
}

export default App