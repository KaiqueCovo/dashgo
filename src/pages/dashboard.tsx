import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
