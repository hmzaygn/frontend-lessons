import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          mt={4}
          px={2}
          sx={{ background: "lightgreen", color: "#aaa", fontSize: "1.2rem" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos animi
          excepturi ratione molestias quasi, veritatis odit consectetur aut in
          voluptatibus!
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          iste architecto quidem, doloribus totam omnis animi ut nostrum eum
          praesentium explicabo quibusdam nihil iure adipisci, quod ipsum,
          molestiae harum aspernatur.
        </Typography>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            width: "50%",
            // justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
