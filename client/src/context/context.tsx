import React, { createContext, useState, useRef, useEffect, ReactNode, RefObject } from 'react';

type DeviceType = "pc" | "mobile" | "tablet"

const AppContext = createContext<{
    device: DeviceType,
}>({
    device: "pc"
});

const ContextProvider = ({ children, refApp }: { children: ReactNode, refApp: RefObject<HTMLDivElement> }) => {

    const [device, setDevice] = useState<DeviceType>("pc")

    useEffect(() => {
        if (refApp?.current?.offsetWidth !== undefined) {
            if (refApp?.current?.offsetWidth < 400) {
                setDevice("mobile")
            }
            else if (refApp?.current?.offsetWidth < 850) {
                setDevice("tablet")
            }
            else {
                setDevice("pc")
            }
        }
    }, [])

    return <AppContext.Provider value={
        {
            device,
        }
    }>
        {children}
    </AppContext.Provider>
}

export { ContextProvider, AppContext }