import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { Box, Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const Sidebar = (): React.ReactElement => {
  return (
    <Box data-testid="sidebar-testid" as="aside" w="64" mr="8">
      <Stack spacing={12} align="flex-start">
        <NavSection title="Geral">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
};
