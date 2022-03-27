import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface IProfileProps {
  showProfileData?: boolean
}
export const Profile = ({ showProfileData }: IProfileProps): React.ReactElement => {
  return (
    <Flex align="center">
      { showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Kaique Covo</Text>
          <Text color="gray.300" fontSize="small">kaique.kng@gmail.com</Text>
        </Box>
      }

      <Avatar size="md" name="Kaique Covo" />
    </Flex>
  );
};
