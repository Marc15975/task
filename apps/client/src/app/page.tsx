"use client";

import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

import Google from "./_login/Google";
import Form from "./_login/Form";
import { ModeToggle } from "@/components/ui/mode-toggle";

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

      {/* Imagen de principal */}
      <div className="relative flex h-screen w-full max-w-7xl items-center justify-center gap-3 px-2 lg:px-10">
        <div className="hidden flex-col items-start justify-center gap-5 lg:flex lg:max-w-137.5 lg:flex-1">
          <div className="flex items-stretch justify-start gap-3 text-3xl text-white">
            <Image
              src="/images/main-logo-dark.png"
              alt="Logo"
              width={120}
              height={120}
              priority
            />

            <span className="flex flex-1 my-6 items-center border-l-3 border-white p-5 text-2xl font-bold">
              TASK
            </span>
          </div>

          <span className="flex text-[20px] font-bold text-white">
            Herramienta centralizada para gestionar,
            <br />
            controlar y monitorear tareas.
          </span>
        </div>

        <Card className="flex min-h-90 w-full lg:max-w-137.5">
          <CardContent className="flex flex-1 flex-col justify-center">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <ModeToggle />
              </div>
              <div className="flex items-center justify-center">
                {/* Logo Light*/}
                <Image
                  src="/images/main-logo.png"
                  alt="Logo"
                  width={170}
                  height={170}
                  className="block dark:hidden"
                />

                {/* Logo Dark */}
                <Image
                  src="/images/main-logo-dark.png"
                  alt="Logo"
                  width={170}
                  height={170}
                  className="hidden dark:block"
                />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold">
                    Iniciar Sesión
                  </span>
                  <span className="text-base">Acceso personal - Task</span>
                </div>
              </div>
            </div>

            {authMethod ? <Form /> : <Google />}
          </CardContent>
          {/* Footer */}
          <CardFooter className="flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <Switch
                id="switch-disabled-unchecked"
                onCheckedChange={() => {
                  setAuthMethod(!authMethod);
                }}
              />
              <span>No tengo credenciales</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
