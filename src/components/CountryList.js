import React from 'react'

let displayCountryDetails = (countries) => {
    return countries.map(eachCountry => {
        let { name, flag, capital, currencies } = eachCountry
        
        let currencyEl = ''
        if (currencies.length === 1) {
            let currencyName = currencies[0].name
            currencyEl = <div key={currencyName}>{currencyName}</div>
        } else {
            currencyEl = currencies.map(currency => { return (<div key={currency.name}>{currency.name}</div>) })
        }

        return (
            <tr>
                <td><img src={flag} alt={name} style={{ width: 50 + 'px' }} /></td>
                <td>{name}</td>
                <td>{capital}</td>
                <td>{currencyEl}</td>
            </tr>
        )
    })
}

const CountryList = ({ countries }) => {
    return (countries.length > 0 && (<table class="table  table-sm">
        <thead class="thead-light">
            <th scope="col">Flag</th>
            <th scope="col">Country name</th>
            <th scope="col">Capital city</th>
            <th scope="col">Currencies</th>
        </thead>
        <tbody>
            {displayCountryDetails(countries)}
        </tbody>
    </table>))
}

export default CountryList