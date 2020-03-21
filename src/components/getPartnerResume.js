import React, { Component } from 'react'
import axios from 'axios'
import Header from ''


class getPartnerResume extends Component {

    state = {
        partners: []
    }
    
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/partners')
        this.setState({partners:res.data})
    }

    render() {
        return (
            <div>
                <Header content = "Partners List"></Header>
            </div>
            
        )
    }

}

export default getPartnerResume