import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextFieldComp = () => {
  const error = false;
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          color="error"
          align="center"
          mt={4}
        >
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter Your Email"
            fullWidth
            error={error}
            helperText={error && "Incorrect Email Format"}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            placeholder="Enter Your Password"
            fullWidth
            error={error}
            helperText={error && "Incorrect Password"}
          />

          <Button variant="contained" color="warning" sx={{ mt: 1 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
