import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
 
const Form = () => {
    const [radioValue, setRadioValue] = useState('cases-and-deaths-map');
    const [zipValue, setZipValue] = useState('');
    const [errors, setErrors] = useState('');

    const handleMapChange = (event) => {
        setRadioValue(event.target.value);
    }

    const handleZipChange = (event) => {
        setZipValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (radioValue === 'cases-and-deaths-map'){
            if (zipValue !== ''){
                window.location.href = `https://gislab.depaul.edu/covid/CasesAndDeaths2.0-master/index.html?find=Chicago,${zipValue}`;
            }
            else{
                window.location.href = `https://gislab.depaul.edu/covid/CasesAndDeaths2.0-master/index.html`;
            }
        }
        else if (radioValue === 'vaccine-map'){
            if (zipValue !== ''){
                window.location.href = `https://gislab.depaul.edu/covid/VaccineMap2.0-master/index.html?find=Chicago,${zipValue}`;
            }
            else {
                window.location.href = `https://gislab.depaul.edu/covid/VaccineMap2.0-master/index.html`;
            }
        }
    }

    return (
        <div style={{marginTop:'2em'}}>
            <form onSubmit={handleSubmit}>
                <Grid container justify="center">
                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{fontWeight: "bold", textAlign: "center"}}>Choose Map</FormLabel>
                        <RadioGroup row aria-label="map" name="map" value={radioValue} onChange={handleMapChange}>
                            <FormControlLabel value="cases-and-deaths-map" control={<Radio />} label="Cases and Deaths Map" />
                            <FormControlLabel value="vaccine-map" control={<Radio />} label="Vaccine Map" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <div>
                        <TextField label="(optional) enter zipcode" id="standard-basic" value={zipValue} onChange={handleZipChange}/>
                    </div>
                    {errors && <h4 style={{color: 'red'}}>{errors}</h4>}
                    <Grid container justify="center" style={{marginTop:'1em'}}>
                        <Button type="submit" variant="contained" color="primary" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                            Go To Map
                        </Button>  
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Form;