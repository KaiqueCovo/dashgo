import { createContext, useContext } from 'react';
import { useEffect } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarContext = createContext({} as SidebarDrawerContextData);

export const useSidebarDrawer = (): SidebarDrawerContextData => useContext(SidebarContext);

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps): React.ReactElement => {
  const disclouse = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclouse.onClose();
  }, [disclouse, router.asPath]);

  return (
    <SidebarContext.Provider value={disclouse} >
      { children }
    </SidebarContext.Provider>
  );
};
