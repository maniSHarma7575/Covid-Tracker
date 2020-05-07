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
        const {data,country}=this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>
                
            </div>
        )
    }
}

export default App