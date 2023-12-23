import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: [
      "About us",
      "Team",
      "Careers",
      "Locations",
      "Contact Us",
      "FAQ",
    ],
  },
  {
    title: "Services",
    description: [
      "Service one",
      "Service two",
      "Service three",
      "Service four",
    ],
  },
  {
    title: "Policies",
    description: [
      "Legal",
      "Privacy Policy",
      "Terms of Service",
      "Accessibility",
      "Cookie Policy",
      "Cookie Settings",
    ],
  },
  {
    title: "Channels",
    description: ["Blog", "Newsletter", "Twitter", "LinkedIn", "Instagram"],
  },
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.paper,
            pt: 5,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Page Example
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              A short and leading info about the content
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        <Container sx={{ py: 6 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} sx={{ pt: 4, pl: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                      bgcolor: (theme) => theme.palette.background.fallback,
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`Heading ${card}`}
                    </Typography>
                    <Typography>
                      A section with description of the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 6,
          py: [2, 6],
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-evenly"
          sx={{ ml: 0, mt: 0 }}
        >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </>
  );
}
