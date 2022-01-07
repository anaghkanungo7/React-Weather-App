import styled from "styled-components";

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin-top: 30px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`;

const ChooseCityLabel = styled.div`
color: black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
margin-top: 30px;
text-align: center;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: 0px;
color: black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;

& input {
    // put css styles here -> another way to style children components using styled components.
}
`;

const CityCard = ({updateCity, fetchWeather}) => {
    return (
        <div>
            <WeatherLogo src="../../public/icons/perfect-day.svg"/>
            <ChooseCityLabel>Enter city name</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input type="text" name="" id="" placeholder="city" 
                onChange={(e) => updateCity(e.target.value)}
                style={{
                    marginRight: 10 + 'px',
                    border: 0 + 'px',
                    fontFamily: 'Courier',
                    padding: 6 + 'px'
                    }}/>
                <button 
                type="submit"
                style={{
                    border: 0 + 'px',
                    fontFamily: 'Courier',
                    color: "white",
                    background : "black", 
                }}>Search</button>
            </SearchBox>
        </div>
        
    )
}

export default CityCard;