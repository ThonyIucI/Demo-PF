import { Avatar } from "@mantine/core";
let usuario =
  "https://produccionindustrialsite.files.wordpress.com/2016/06/1.png";
export default function UserAvatar() {
  return (
    <>
      {/* With image */}
      <Avatar src={usuario} alt="it's me" />
      Usuario Cualquiera
    </>
  );
}
