import { ActionIcon, Button, Stack } from "@mantine/core";
import { useState } from "react";
import { Sun, MoonStars } from "tabler-icons-react";
import { Badge } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

function Demo({ color, setColor }) {
  const changeColor = () => {
    color === "dark" ? (color = "light") : (color = "dark");
    setColor(color);
    console.log(`ahora soy ${color}`);
  };
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <ActionIcon
        variant="outline"
        color={color === "dark" ? "yellow" : "blue"}
        onClick={() => changeColor()}
        title="Toggle color scheme"
      >
        {color === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
      <Button>xd</Button>

      <Badge color={colorScheme === "ligth" ? "blue" : "teal"} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
      <Badge variant="filled">Your system color scheme is {colorScheme}</Badge>
    </Stack>
  );
}
export default Demo;
