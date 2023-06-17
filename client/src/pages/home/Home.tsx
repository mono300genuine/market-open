import { Text, Button, Flex, Image } from '@mantine/core';
import  lock from "assets/images/Lock.png";

function Home(){
  return (
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
        <Text c="black">Sell and buy your items through BlockChain</Text>
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
        </Flex>
        <Image src={lock} maw={340}/>
        </Flex>
    );
}

export { Home };
