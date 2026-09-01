"use client";

import Image, { getImageProps } from "next/image";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

import Google from "./_login/Google";
import Form from "./_login/Form";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Loading from "@/components/ui/loading";

export default function Home() {
  const [authMethod, setAuthMethod] = useState<boolean>(false);
  const commonBackgroundProps = {
    alt: "Fondo de login",
    sizes: "100vw",
    priority: true,
  };
  const {
    props: { srcSet: desktopBackgroundSrcSet },
  } = getImageProps({
    ...commonBackgroundProps,
    src: "/images/login1.jpg",
    width: 5051,
    height: 3367,
    quality: 85,
  });
  const { props: mobileBackgroundProps } = getImageProps({
    ...commonBackgroundProps,
    src: "/images/login-mobile.png",
    width: 941,
    height: 1672,
    quality: 85,
  });

  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktopBackgroundSrcSet}
          sizes="100vw"
        />
        <img
          {...mobileBackgroundProps}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

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

            <span className="my-6 flex flex-1 items-center border-l-3 border-white p-5 text-2xl font-bold">
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
          <CardContent className="relative flex flex-1 flex-col justify-center">
            {/* <Loading extraClassName="absolute  " />*/}
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
