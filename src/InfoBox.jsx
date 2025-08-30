import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8="

    const HOT_URL = 
    "https://media.istockphoto.com/id/828198028/photo/wood-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Db111wbzmMrpY5qq5azFXkc5FKEizdb_vIHHPfgvxjA=";
    const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = 
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    
    
    return (
        <div className="InfoBox">
            <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80 ? RAIN_URL : info.temp> 15 ? HOT_URL : COLD_URL}
        title="green iguana"
            />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}  {info.humidity>80 ? <BeachAccessIcon/> : info.temp> 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {info.temp}&deg;</div>
            <div>Humidity = {info.humidity}</div>
            <div>Maximum Temperature = {info.tempMax}&deg;</div>
            <div>Minimum Temperature = {info.tempMin}&deg;</div>
            <div>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;</div> 
                
        </Typography>
        </CardContent>
    </Card>
    </div>
        </div>
    )
}