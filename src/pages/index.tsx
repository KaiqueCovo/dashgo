
import type { NextPage } from 'next'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '@/components/Form/Input'

const SignIn: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input 
            label="E-mail"
            type="email"
            name="email"
          />
          <Input 
            label="Senha"
            type="password"
            name="password"
          />
        </Stack>
        <Button 
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
