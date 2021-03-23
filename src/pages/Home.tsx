import React from "react";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router";

function Home() {
  const [min, setMin] = React.useState<number>(0);
  const [max, setMax] = React.useState<number>(100);
  const initialRandom = Math.floor(min + Math.random() * (max - min));
  const [random, setRandom] = React.useState<number>(initialRandom);
  const [randomlist, setRandomList] = React.useState<number[]>([]);
  const history = useHistory();
  const location = useLocation<{ fromForm: number }>();
  const inputNumber = location.state.fromForm;

  function handleClick(operator: string) {
    randomlist.push(random);
    operator === ">" ? setMin(random) : setMax(random);
  }

  React.useEffect(() => {
    let rand = Math.floor(min + Math.random() * (max - min));
    while (!(rand > min && rand < max)) {
      rand = Math.floor(min + Math.random() * (max - min));
    }
    setRandom(rand);
  }, [min, max]);

  React.useEffect(() => {
    Number(inputNumber) === random && history.push("/end");
  }, [random]);

  const randomNumbers = randomlist.map((el) => {
    return (
      <Box key={el} bg="gray.200" w="180px" h="50px" m={5}>
        {el}
      </Box>
    );
  });

  return (
    <Box>
      <Heading mt={24} mb={10}>
        {random}
      </Heading>
      <ButtonGroup spacing="24px">
        <Button
          onClick={() => handleClick(">")}
          w="50px"
          h="50px"
          bg="gray.400"
        >
          {">"}
        </Button>
        <Button
          onClick={() => handleClick("<")}
          w="50px"
          h="50px"
          bg="gray.400"
        >
          {"<"}
        </Button>
      </ButtonGroup>
      <Box mx="42vw" mt={10}>
        {randomNumbers}
      </Box>
    </Box>
  );
}

export default Home;
