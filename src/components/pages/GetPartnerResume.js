import React, { Component } from 'react'
import axios from 'axios'
import Header from '../layout/templates/Header'
import Experience from '../layout/templates/Experience'


class getPartnerResume extends Component {

    state = {
        partner: null
    }
    
    async componentDidMount(){
        this.getPartner("romi")
    }

    async getPartner(slug){
        const res = await axios.get("http://localhost:4000/api/partners/" + slug)
        this.setState({partner : res.data})   
        console.log(this.state.partner)
    }
    
    render() {  
        if (this.state.partner === null ){
            return (
                <div>
                    There is no partner here
                </div>        
                )
        } else {
            let partner = this.state.partner
            return (
                <div>
                    <Header name={partner.name} lastname={partner.lastname}></Header>
                    <Experience from={partner.experiences[0].from} to={partner.experiences[0].to} title={partner.experiences[0].title} icon="" institution={partner.experiences[0].institution} place={partner.experiences[0].place} description={partner.experiences[0].description}></Experience>
                </div>        
                )
        }
    }
}

export default getPartnerResume