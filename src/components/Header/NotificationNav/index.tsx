import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

import { HStack, Icon } from '@chakra-ui/react';

export const NotificationNav = (): React.ReactElement => {
  return (
    <HStack
      spacing={{ sm: '6', md: '8' }}
      mx={{ sm: '6', md: '8' }}
      pr={{ sm: '6', md: '8' }}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
};
