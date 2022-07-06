import { Navbar } from "@mantine/core";
import { Link, Route, Routes } from "react-router-dom";
export default function NavBarUser({ opened }) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>
        <Link to="/">holi</Link>
      </Navbar.Section>
      <Routes>
        <Route path=":id" element={<>holi</>} />
        <Route path="me" element={<>holi again</>} />
      </Routes>
    </Navbar>
  );
}
