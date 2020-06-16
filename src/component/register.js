import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginLeft: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "21ch",
  },
  btn: {
    marginTop: 20,
  },
  downText: {
    textDecoration: "none",
    color: "#000",
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const defaultProps = {
    options: ["laki-laki", "perempuan"],
    getOptionLabel: (option) => option,
  };

  return (
    <>
      <Box flexWrap="wrap" justifyContent="center">
        <div>
          <h3>Register</h3>
          <TextField
            required
            id="standard-required"
            label="Username"
            autoFocus
          />
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Box order={2}>
          <TextField required id="fullname" label="Full Name" />
          <TextField
            type="number"
            required
            id="phone"
            label="Phone"
            className={classes.margin}
          />
        </Box>
        <Autocomplete
          {...defaultProps}
          id="debug"
          debug
          renderInput={(params) => (
            <TextField {...params} label="Gender" margin="normal" />
          )}
        />
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          style={{ width: 370 }}
          placeholder="Address"
        />
        <div className={classes.btn}>
          <Link to="/true" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Register
            </Button>
          </Link>
          <small>
            {" "}
            have an acount ? klik{" "}
            <Link to="/login" className={classes.downText}>
              Here
            </Link>
          </small>
        </div>
      </Box>
    </>
  );
}
