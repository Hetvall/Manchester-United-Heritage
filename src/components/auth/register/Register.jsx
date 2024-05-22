import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isRegistering,
  errorMessage,
  onSubmit,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography sx={{ mt: "20px" }} variant="h4">
        Create a New Account
      </Typography>

      <Box sx={{ mt: "20px" }} component="form" onSubmit={onSubmit}>
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
          disabled={isRegistering}
          type="password"
          autoComplete="new-password"
          required
          size="small"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Typography
          sx={{ display: "flex", flexDirection: "column", mt: "20px" }}
          variant="body2"
          component="label"
        >
          Confirm Password
        </Typography>
        <TextField
          disabled={isRegistering}
          type="password"
          autoComplete="off"
          required
          size="small"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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
            mt: "15px",
            mb: "15px",
            display: "flex",
            mx: "auto",
          }}
          type="submit"
          variant="outline"
          disabled={isRegistering}
          className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
            isRegistering
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
          }`}
        >
          {isRegistering ? "Signing Up..." : "Sign Up"}
        </Button>
      </Box>

      <Typography variant="h6">
        Already have an account?
        <Link to={"/login"}> Log In</Link>
      </Typography>
    </Box>
  );
};

export default Register;
