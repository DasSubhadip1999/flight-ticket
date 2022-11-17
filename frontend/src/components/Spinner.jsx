import { Spinner } from "@chakra-ui/react";

function SpinnerElm() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      position="absolute"
      left="9rem"
      top="20rem"
    />
  );
}

export default SpinnerElm;
