import { Box, Stack, Text } from '@chakra-ui/react';

interface INavSectionProps {
  title: string;
  children: React.ReactNode;
}

export const NavSection = ({ title, children }: INavSectionProps): React.ReactElement => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing={4} mt={8} align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
