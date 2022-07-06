import { Button, Image, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  //Navigates reaplaces functions of history
  let navigate = useNavigate();
  return (
    <Stack>
      <div
        style={{
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          radius="md"
          src="https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1-1024x655.jpg"
          alt="Page not Found :V"
        />
      </div>
      <Button
        style={{
          width: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </Stack>
  );
}
