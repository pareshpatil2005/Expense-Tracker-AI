import { checkUser } from "@/lib/checkUser";

export default function Navbar() {
  const user = checkUser();
//   console.log("user", user);
  return <div>Navbar</div>;
}
