import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Google = () => {
  return (
    <Button variant={"outline"} size={"lg"} onClick={() => signIn("google")}>
      <FcGoogle size={60} /> Iniciar con Google
    </Button>
  );
};

export default Google;
