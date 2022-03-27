import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>

  );
}

export default MyApp;
