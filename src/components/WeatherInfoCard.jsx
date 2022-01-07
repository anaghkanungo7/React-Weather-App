import styled from "styled-components";
import {WeatherIcons} from "../App";


export const WeatherInfoIcons = {
    Sunset: "icons/temp.svg",
    Sunrise: "icons/temp.svg",
    Humidity: "icons/humidity.svg",
    Wind: "icons/wind.svg",
    Pressure: "icons/pressure.svg",
};

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin-top: 15px;
`;

const Temperature = styled.div`
display: flex;
flex-direction: row;
margin: 30px;
margin-right: 80px;
font-size: 25px;
font-family: Montserrat;
`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`;

const Location = styled.div`
font-size: 22px;
font-weight: bold;
text-align: center;
font-family: Montserrat;
`;

const WeatherInfoLabel = styled.div`
font-size: 14px;
font-weight: bold;
text-align: start;
width: 90%;
font-family: Montserrat;
margin: 20px;
`;

const WeatherInfoContainer = styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;

`;

const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const { name , value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
                </InfoLabel>
        </InfoContainer>
    )
}

const WeatherInfoCard = ({weather}) => {
    const isDay = weather?.weather[0].icon?.includes('d');

    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    const apiIcon = weather?.weather[0]?.icon;
    return (
        <div>
            <WeatherCondition>
                <Temperature><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}</Temperature>
                <WeatherLogo src={WeatherIcons[`${apiIcon}`]}/>

            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "Sunset" : "Sunrise" }  value={`${getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}`}/>
                <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure}/>

            </WeatherInfoContainer>
        </div>
    )
}

export default WeatherInfoCard;