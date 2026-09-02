import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import Loading from "@/components/ui/loading";

const Google = () => {

const [isSigningIn, setIsSigningIn] = useState(false);
  const popupRef = useRef(null);
  const intervalRef = useRef(null);

  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(url,title,`width=${500 / systemZoom},height=${550 / systemZoom},top=${top},left=${left}`,);

    newWindow?.focus();

    // --- activar loading ---
    setIsSigningIn(true);
    popupRef.current = newWindow;

    // limpiar cualquier intervalo previo
    if (intervalRef.current) clearInterval(intervalRef.current);

    // chequear cada 500ms si el popup se cerró
    intervalRef.current = setInterval(() => {
      if (!popupRef.current || popupRef.current.closed) {
        clearInterval(intervalRef.current);
        setIsSigningIn(false);
      }
    }, 500);
  };

  return (
    <Button
      variant={"outline"}
      size={"lg"}
      onClick={() => popupCenter("/google", "Sample Sign In")}
    >
      {isSigningIn ? <Loading size={60}/> : <>  <FcGoogle size={60} /> Iniciar con Google</>}
    </Button>
  );
};

export default Google;
