import React from 'react';
import axios from "axios";

const API = "https://api.hgbrasil.com/weather?woeid=457233&format=json-cors&locate=pt";

class App extends React.Component {

    state = {
        cidade : "",
        forecast: []
    }



    componentDidMount() {
        axios.get(API)
            .then( ({data})  => {
                console.log(data)
                this.setState({
                    cidade : data.results.city,
                    forecast : data.results.forecast
                })

            })
    }

    render() {
        let {cidade} = this.state;
        return (
            <div className="container">
                <h3>{cidade}</h3>
                <table  className="striped centered">
                    <thead>
                    <tr>
                        <th>Dia</th>
                        <th>Min.</th>
                        <th>Max.</th>
                        <th>Previsão.</th>
                        <th>Imagem.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.forecast.map( (previsao,index) => {
                            return (
                                <tr key={index} >
                                    <td>{previsao.weekday}</td>
                                    <td>{previsao.min}</td>
                                    <td>{previsao.max}</td>
                                    <td>{previsao.description}</td>
                                    <td> <img src={`/weather-icons/${previsao.condition}.svg`} width="20%"
                                              alt={previsao.description} /></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default App;
