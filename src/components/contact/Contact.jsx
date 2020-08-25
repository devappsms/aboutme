import React from "react";
import { withStyles, CardMedia } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Subject from '@material-ui/icons/Subject'
import * as emailjs from 'emailjs-com'
import getInTouch from '../../images/get-in-touch.png';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    cardRoot: {
        maxWidth: '100%',
        background: 'white',
        margin: 30
    },
    cardRoot1: {
        maxWidth: '100%',
        margin: 30
    },
    getMedia:{
        height: 0,
        paddingTop: '80%',
        width: '100%'
    },
    emailColor: {
        color: 'blue'
    },
    title: {
        color: 'white'
    }
});
class Contact extends React.Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            message: '',
            name: '',
            subject: '',
            error: false
        }
    }

    handleReset = () => {
        this.setState({ email: '' , message: '', error: false, name: '', subject: ''})
    }
    handleChange = (e) => {
        console.log(e.target.name)
        if(e.target.name === 'email'){
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(e.target.value).toLowerCase())) this.setState({error: false})
            else this.setState({error: true})
        }
        this.setState({[e.target.name] : e.target.value})
    }

    handleClick = (e) => {
        const { name, email, subject, message } = this.state
        let templateParams = {
            reply_to: email,
            from_name: name,
            to_name: 'Mohendren',
            subject: subject ? subject : 'New Message from ' + name,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_wBIPld3G',
            templateParams,
            'user_rUNv4eDJazD57AhEnyOrH'
        ).then((result) => {
            console.log(result.text);
            this.handleReset()
        }, (error) => {
            console.log(error.text);
        });

    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={3} className={classes.root}>
                <Grid lg={6}  alignItems='flex-start' >
                    <Card className={classes.cardRoot} raised>
                        <CardHeader title='Please enter your email id and Message.' > </CardHeader>
                        <CardContent>
                            <Grid container spacing={4} alignItems='flex-start' >
                            <Grid xs={6} item>
                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Name"
                                        name="name"
                                        variant='outlined'
                                        type='text'
                                        autoFocus
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.emailColor}>
                                                    <AccountBoxIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                
                                <Grid xs={6} item>
                                    <TextField
                                        error={this.state.error}
                                        helperText= {this.state.error ? "Enter valid Email Id" : null}
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Email"
                                        name="email"
                                        variant='outlined'
                                        type='email'
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.emailColor}>
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        error={this.state.error}
                                        helperText= {this.state.error ? "Enter valid Email Id" : null}
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Subject"
                                        name="subject"
                                        variant='outlined'
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.subject}
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.emailColor}>
                                                    <Subject />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Message"
                                        variant='outlined'
                                        multiline
                                        required
                                        fullWidth
                                        rows={10}
                                        rowsMax={10}
                                        name="message"
                                        onChange={this.handleChange}
                                        value={this.state.message}                                       
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.emailColor}>
                                                    <InsertCommentIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid xs={12} item >
                                <Grid container spacing={2} justify='flex-end'>
                                    <Grid sm={3} item >
                                        <Button variant="contained" color="secondary" 
                                             startIcon={<RotateLeftIcon />} onClick={this.handleReset}
                                             disabled={ !this.state.email.length> 0 && !this.state.message.length> 0 &&
                                                        !this.state.name.length> 0 }>
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid sm={4} item>
                                        <Button variant="contained" color="primary" 
                                        onClick={this.handleClick}
                                         disabled={ this.state.email.length <= 0 || this.state.message.length<= 0
                                                    || this.state.name.length<= 0 }
                                        endIcon={<Icon>send</Icon>}> Send </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid lg={6} sm={12}  alignItems='center'> 
                  <Card  className={classes.cardRoot1} outlined >
                      <CardHeader title='You can expect a reply within 24 hours.' className={classes.title}> </CardHeader>
                      <CardActionArea>
                      <CardMedia image={getInTouch} className={classes.getMedia}/>
                      </CardActionArea>
                   </Card> </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Contact);