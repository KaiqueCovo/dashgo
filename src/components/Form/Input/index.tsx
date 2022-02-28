import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string
}

export const Input = ({ name, label, ...resProps }: IInputProps): React.ReactElement => (
  <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      id={name}
      name={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{ bgColor: ' gray.900' }}
      size="lg"
      {...resProps}
    />
  </FormControl>
);
