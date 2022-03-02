import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const Profile = (): React.ReactElement => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Kaique Covo</Text>
        <Text color="gray.300" fontSize="small">kaique.kng@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Kaique Covo" />
    </Flex>
  );
};
