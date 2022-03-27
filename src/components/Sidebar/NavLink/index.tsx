import { ActiveLink } from '@/components/ActiveLink/ActiveLink';
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface INavLinkProps extends ChakraLinkProps {
  icon: React.ElementType
  children: string;
  href: string;
}

export const NavLink = ({ icon, children, href, ...restProps }: INavLinkProps): React.ReactElement => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...restProps}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
};
