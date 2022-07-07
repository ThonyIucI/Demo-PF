import React, { useState } from "react";
import { Group, ActionIcon, Box } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { Logo } from "./Logo";

export function Brand() {
  let [color, setColor] = useState("dark");
  const changeColor = () => {
    color === "dark" ? (color = "light") : (color = "dark");
    setColor(color);
    console.log(`ahora soy ${color}`);
  };
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === "blue"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Logo colorScheme={color} />

        <ActionIcon
          variant="default"
          color={color === "dark" ? "yellow" : "blue"}
          onClick={() => changeColor()}
          size={30}
        >
          {color === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
}
