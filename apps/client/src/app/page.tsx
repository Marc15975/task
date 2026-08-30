"use client";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { useState } from "react";
import Google from "./_login/Google";
import Form from "./_login/Form";

export default function Home() {
  const [authMethod, setAuthMethod] = useState<boolean>(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/images/login1.jpg"
        alt="Fondo de login"
        fill
        className="object-cover object-[29%_30%]"
      />
      <div className="relative flex h-screen w-full max-w-7xl items-center justify-center gap-3 px-2 lg:px-10">
        <div className="hidden flex-col items-start justify-center gap-5 lg:flex lg:max-w-137.5 lg:flex-1">
          <div className="flex items-center justify-start gap-3 text-3xl text-white">
            <Image
              src="/images/main-logo.png"
              alt="Fondo de login"
              width={60}
              height={60}
              priority
            />
            <span className="text-2x flex font-bold"> | TASK</span>
          </div>
          <span className="flex text-[20px] font-bold text-white">
            Herramienta centralizada para gestionar,
            <br />
            controlar y monitorear tareas.
          </span>
        </div>
        <Card className="flex min-h-90 w-full lg:max-w-137.5">
          <CardContent className="flex flex-1 flex-col justify-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/main-logo.png"
                alt="Fondo de login"
                width={170}
                height={170}
              />

              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold">Iniciar Sesión</span>
                <span className="text-base text-gray-500">
                  Acceso personal - Task
                </span>
              </div>
            </div>

            {authMethod ? <Form /> : <Google />}
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <Switch
                id="switch-disabled-unchecked"
                onCheckedChange={() => {
                  setAuthMethod(!authMethod);
                }}
              />
              <span className="text-gray-500">No tengo credenciales</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
