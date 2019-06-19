import React, {useContext} from 'react';
import {LanguageContext} from './Contexts/LanguageContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';

const words = {
	english: {
		signin: "Sign In",
		email: "Email",
		password: "Password",
		rememberme: "Remember Me"
	},
	hindi: {
		signin: "साइन इन करें",
		email: "ईमेल",
		password: "पासवर्ड",
		rememberme: "मुझे इस डिवाइस पर याद रखें"
	},
	gujarati: {
		signin: "સાઇન ઇન કરો",
		email: "ઇમેઇલ",
		password: "પાસવર્ડ",
		rememberme: "મને યાદ રાખો"
	}
}

function Form(props){
	const {language, updateLanguage} = useContext(LanguageContext);
	const {classes} = props;
	const {email, password, signin, rememberme} = words[language];
	return(
		<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlined/>
					</Avatar>
					<Typography variant="h5">{signin}</Typography>
					<Select value={language} onChange={updateLanguage}>
						<MenuItem value="english">English</MenuItem>
						<MenuItem value="hindi">Hindi</MenuItem>
						<MenuItem value="gujarati">Gujarati</MenuItem>
					</Select>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">{email}</InputLabel>
							<Input id="email" name="email" autoFocus/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">{password}</InputLabel>
							<Input id="password" name="password" autoFocus/>
						</FormControl>
						<FormControlLabel control={<Checkbox color="primary"/>} label={rememberme} />
						<Button className={classes.submit} variant="contained" type="submit" fullWidth color="primary">{signin}</Button>
					</form>
				</Paper>
			</main>
	)
}

export default withStyles(styles)(Form);