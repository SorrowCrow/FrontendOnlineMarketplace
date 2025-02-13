import { VStack } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import Main from "../../MainPage";
const Home: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  // return (
  //   <VStack>
  //     <h1>Epic Online Marketplace </h1>
  //     <h1>Epic Online Marketplace </h1>
  //   </VStack>
  // );
  return <Main />;
};

export default Home;
