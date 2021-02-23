import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import AppBar from './AppBar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import './LandingPage.css';


const LandingPage = () => {
    return (
        <div>
            <AppBar/>
            <Container maxWidth="sm">
                <Card style={{marginTop:'5em', boxShadow: '0px 44px 45px'}} variant="outlined" elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Depaul University COVID-19 Dashboard
                        </Typography>
                        <br/>
                        <Typography color="textSecondary" gutterBottom>
                            Welcome to Depaul University's interactive web app mapping COVID-19 related data across 
                            the city of Chicago. Choose the vaccine map or the cases and deaths map. Optionally enter 
                            in a zipcode for the map to zoom in on, or go to city-wide view by clicking go to map:
                            <Form/>
                        </Typography>
                    </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Container>
        </div>
    );
};

export default LandingPage;