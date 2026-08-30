import { Button } from "@/components/ui/button";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Google = () => {
  return (
    <div className="flex flex-col items-center p-0">
      <div className="flex h-64 w-full flex-col items-center justify-center gap-4">
        <Image
          src="/images/main-logo.png"
          alt="Fondo de login"
          width={70}
          height={70}
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold">Iniciar Sesión</span>
          <span className="text-base text-gray-500">
            Acceso personal - Task
          </span>
        </div>
        <div className="flex w-full">
          <Button
            variant={"outline"}
            className={
              "flex h-10 w-full px-2 text-[18px] text-gray-500 lg:h-12"
            }
            onClick={() => signIn("google")}
          >
            <FcGoogle size={60} /> Iniciar con Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Google;
