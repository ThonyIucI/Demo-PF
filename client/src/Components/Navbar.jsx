import React from "react";
import {
  createStyles,
  Header,
  Group,
  Container,
  Button,
} from "@mantine/core";
import LOGOnombre from '../images/LOGOnombre.jpg';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#1bff72",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },
}));

export default function Navbar() {
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={56} mb={120}>
      <Container className={classes.inner}>
      <Group position="left" noWrap>
      <a href='#'>
         <Button variant="outline" color="dark" compact uppercase>
           PLANTILLAS
         </Button>
         </a>
        <a href='#'>
         <Button variant="outline" color="dark" compact uppercase>
           MAS INFO
         </Button>
         </a>
      </Group> 
        <img className={classes.inner} src={LOGOnombre} alt="logo" />
        <Group position="right" noWrap>
        <a href='#'>
          <Button variant="outline" color="dark" compact uppercase>
            QUIERO EMPEZAR
          </Button>
          </a>
          <a href='#'>
          <Button variant="outline" color="dark" compact uppercase>
            INICIAR SESION
          </Button>
          </a>

        </Group>
      </Container>
    </Header>
  );
}
