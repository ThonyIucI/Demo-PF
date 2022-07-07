import React, { useState } from "react";
import {
  // AppShell,
  // Header,
  // Footer,
  // Aside,
  // Text,
  // MediaQuery,
  // Burger,
  Navbar,
  // useMantineTheme,
} from "@mantine/core";
import { MainLinks } from "./MainLinks";
import { User } from "./User";
import { Brand } from "./Brand";

export default function UserPanel() {
  // const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);
  return (
    //   <AppShell
    //     styles={{
    //       main: {
    //         background:
    //           theme.colorScheme === "dark"
    //             ? theme.colors.dark[8]
    //             : theme.colors.gray[0],
    //       },
    //     }}
    //     navbarOffsetBreakpoint="sm"
    //     asideOffsetBreakpoint="sm"
    //     fixed
    //     navbar={
    //       <Navbar
    //         p="md"
    //         hiddenBreakpoint="sm"
    //         hidden={!opened}
    //         width={{ sm: 200, lg: 300 }}
    //       >
    //         <MainLinks />
    //       </Navbar>
    //     }
    //     aside={
    //       <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
    //         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
    //           <Text>Application sidebar</Text>
    //         </Aside>
    //       </MediaQuery>
    //     }
    //     footer={
    //       <Footer height={60} p="md">
    //         <User />
    //       </Footer>
    //     }
    //     header={
    //       <Header height={70} p="md">
    //         <div
    //           style={{ display: "flex", alignItems: "center", height: "100%" }}
    //         >
    //           <MediaQuery largerThan="sm" styles={{ display: "none" }}>
    //             <Burger
    //               opened={opened}
    //               onClick={() => setOpened((o) => !o)}
    //               size="sm"
    //               color={theme.colors.gray[6]}
    //               mr="xl"
    //             />
    //           </MediaQuery>

    //           <Brand />
    //         </div>
    //       </Header>
    //     }
    //   >
    //     <Text>Resize app to see responsive navbar in action</Text>
    //   </AppShell>

    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
