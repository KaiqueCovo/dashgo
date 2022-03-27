import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { Stack } from '@chakra-ui/react';

import { NavLink } from '../NavLink';
import { NavSection } from '../NavSection';

export const SidebarNav = (): React.ReactElement => {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
      </NavSection>
    </Stack>
  );
};
