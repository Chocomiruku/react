import moment from 'moment';
import 'moment/locale/ru'

interface Props {
    temp: number;
    date: string;
}

const WeatherInfo = (props: Props) => {
    let formattedDateString = moment(new Date(props.date)).format('DD MMMM YYYY, HH:mm');

    return <div>
        <div>{props.temp}</div>
        <div>{formattedDateString}</div>
    </div>
}

export default WeatherInfo;
