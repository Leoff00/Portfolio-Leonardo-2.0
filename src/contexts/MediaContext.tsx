import { ReactNode } from "react";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

type MediaContextProviderProps = {
  children: ReactNode;
};

type MediaProps = {
  isDesktopOrLaptop: boolean;
  isTabletOrMobileDevice: boolean;
  isBigScreen: boolean;
  isTabletOrMobile: boolean;
  isPortrait: boolean;
  isRetina: boolean;
};

export const MediaContext = createContext({} as MediaProps);

export function MediaContextProvider({ children }: MediaContextProviderProps) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const mediaResolution = {
    isDesktopOrLaptop,
    isTabletOrMobileDevice,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };

  return (
    <MediaContext.Provider value={mediaResolution}>
      {children}
    </MediaContext.Provider>
  );
}
