import { Stack, Navbar, Footer } from "@mantine/core";

function Demo() {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        height: 300,
      })}
    >
      <Navbar>
        <h1>SOY EL NAVBAR</h1>
      </Navbar>

      <h1>SOY EL VARRUSEL</h1>
      <h1>SOY EL EL CARDCONTANER</h1>
      <Footer>
        <h1>SOY EL FOOTER</h1>
      </Footer>
    </Stack>
  );
}

export default Demo;
