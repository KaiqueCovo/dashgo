import { Icon, Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface INavLinkProps extends ChakraLinkProps {
  icon: React.ElementType
  children: string;
}

export const NavLink = ({ icon, children, ...restProps }: INavLinkProps): React.ReactElement => {
  return (
    <Link display="flex" alignItems="center" {...restProps}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
};
