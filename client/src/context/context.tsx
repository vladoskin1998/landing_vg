import React, { createContext, useState, useRef, useEffect, ReactNode, RefObject } from 'react';
import { DeviceType } from '../types/types-main';

const AppContext = createContext<{
    device: DeviceType,
    isAuth: string,
}>({
    device: "pc",
    isAuth: localStorage.getItem("token") || "",
});

const ContextProvider = ({ children, refApp }: { children: ReactNode, refApp: RefObject<HTMLDivElement> }) => {

    const [device, setDevice] = useState<DeviceType>("pc")
    const [isAuth, setIsAuth] = useState(localStorage.getItem("token") || "")

    useEffect(() => {

        const handleResize = () => {
          if (refApp?.current?.offsetWidth !== undefined) {
            if (refApp?.current?.offsetWidth < 450) {
              setDevice("mobile");
              document.body.classList.add("no-hover");
            } else if (refApp?.current?.offsetWidth < 950) {
              setDevice("tablet");
              document.body.classList.add("no-hover");
            } else {
              setDevice("pc");
              document.body.classList.remove("no-hover");
            }
          }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const onStorageChange = () => {
          setIsAuth(localStorage.getItem("token") || "");
        };

        window.addEventListener("storage", onStorageChange);
      
        return () => {
          window.removeEventListener("storage", onStorageChange);
          window.removeEventListener("resize", handleResize);
        };
      }, [refApp?.current?.offsetWidth]);

    return <AppContext.Provider value={
        {
            device,
            isAuth,
        }
    }>
        {children}
    </AppContext.Provider>
}

export { ContextProvider, AppContext }