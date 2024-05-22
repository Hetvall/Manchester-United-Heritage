import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../context";
import { Box, Button, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const LogIn = () => {
  const navigate = useNavigate();
  const { userLogIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessAlert, setSucessAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        setSucessAlert(true);
        setTimeout(() => {
          setSucessAlert(false);
          navigate("/");
        }, 3000);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };
  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle()
        .then(() => {
          setSucessAlert(true);
          setTimeout(() => {
            setSucessAlert(false);
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setIsSigningIn(false);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "30px",
      }}
    >
      {userLogIn && <Navigate to={"/"} replace={true} />}
      {sucessAlert && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          You have successfully logged in.
        </Alert>
      )}

      <Typography variant="h4">Welcome Back!</Typography>

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ display: "flex", flexDirection: "column" }}
          variant="body2"
          component="label"
        >
          Email
        </Typography>
        <TextField
          type="email"
          autoComplete="email"
          required
          size="small"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Typography
          sx={{ display: "flex", flexDirection: "column", mt: "20px" }}
          variant="body2"
          component="label"
        >
          Password
        </Typography>
        <TextField
          type="password"
          autoComplete="current-password"
          required
          size="small"
          value={password}
          sx={{ mt: "15px", mb: "10px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}
        <Button
          sx={{
            border: "1px solid",
            display: "flex",
            color: "black",
            mb: "15px",
            mx: "auto",
          }}
          type="submit"
          disabled={isSigningIn}
          className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
            isSigningIn
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
          }`}
        >
          {isSigningIn ? "Signing In..." : "Log In"}
        </Button>
      </Box>

      <Typography>
        Do not have an account?
        <Link to={"/register"}> Sign up</Link>
      </Typography>

      <Typography sx={{ mb: "15px" }}>Or</Typography>

      <button
        disabled={isSigningIn}
        onClick={(e) => {
          onGoogleSignIn(e);
        }}
        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
          isSigningIn
            ? "cursor-not-allowed"
            : "hover:bg-gray-100 transition duration-300 active:bg-gray-100"
        }`}
      >
        <img
          style={{ width: "110px", height: "80px" }}
          src="https://res.cloudinary.com/dsrxguglp/image/upload/v1716087723/qacuy8e0ehq6n5c1iwmv.webp"
          alt="Google logo"
        />
      </button>
      <Typography>
        {isSigningIn ? "Signing In..." : "Continue with Google"}
      </Typography>
    </Box>
  );
};
export default LogIn;
