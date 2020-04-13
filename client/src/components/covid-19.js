import React, { Component } from 'react'
import axios from 'axios'


class Stats extends Component {

  state = {
    dataList: [{
      country: '',
      confirmed: '',
      recovered: '',
      critical: '',
      deaths: '',
      latitude: '',
      longitude: '',
      dataList: []
    }]
  }

  // componentDidMount() {
  //   axios.get(`/api/data`)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newState = { ...this.state }
    newState[name] = value;
    this.setState(newState)

  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/data', this.state)
  }


  componentDidMount() {
    axios.get("https://covid-19-data.p.rapidapi.com/country", {

      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "712bf9e2e1msh66e6efc09c3da2cp176473jsnf55e3b889176"
      },
      params: {
        format: undefined,
        name: "Italy"
      }

    })
      .then((response => {
        this.setState({
          dataList: response.data
        })
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    console.log(this.state.dataList[0])


    const DataTable = this.state.dataList.map((dataList, i) => (
      <tr key={i}>
        <td width={300} height={50}>{dataList.country} </td>
        <td width={300} height={50}>{dataList.confirmed}</td>
        <td width={300} height={50}>{dataList.recovered}</td>
        <td width={300} height={50}>{dataList.critical}</td>
        <td width={300} height={50}>{dataList.deaths}</td>
        <td width={300} height={50}>{dataList.latitude}</td>
        <td width={300} height={50}>{dataList.longitude}</td>

      </tr>
    ))

    return (
      <div className="categories">

        <table>
          <thead>
            <tr>
              <th width={300} height={50}>Country</th>
              <th width={300} height={50}>Confirmed</th>
              <th width={300} height={50}>Recovered</th>
              <th width={300} height={50}>Critical</th>
              <th width={300} height={50}>Deaths</th>
              <th width={300} height={50}>Latitude</th>
              <th width={300} height={50}>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {DataTable}

          </tbody>
        </table>


        <div className="dataForm">

        </div>


      </div>
    )
  }
}


export default Stats