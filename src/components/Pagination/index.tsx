import { Box, HStack } from '@chakra-ui/react';

import { Item } from './Item';

export const Pagination = (): React.ReactElement => {
  return (
    <HStack data-testid="pagination-testid" spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Item number={1} isCurrent />
        <Item number={2} />
        <Item number={3} />
        <Item number={4} />
      </HStack>
    </HStack>
  );
};
