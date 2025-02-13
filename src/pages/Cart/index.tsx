import { FC, HTMLAttributes, useEffect, useState } from "react";
import {
  Container,
  Box,
  Button,
  Field,
  Input,
  Text,
  VStack,
  Grid,
  Span,
  Image,
  Flex,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Field as FormikField } from "formik";
import useApi from "@/hooks/useApi";
import logo from "../../assets/logo.svg";
import { BiTrash } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const Cart: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  const [listings, setListings] = useState<
    {
      title: string;
      description: string;
      price: number;
      listingID: number;
    }[]
  >();

  useEffect(() => {
    loadData("getCart");
  }, []);

  useEffect(() => {
    if (!data || !data.listings) {
      return;
    }
    setListings(data.listings);
  }, [data]);

  const removeFromCart = (listingID: string) => {
    console.log(
      Object.values(JSON.parse(JSON.stringify({ listingID }))).join("/")
    );
    loadData("removeFromCart", undefined, undefined, { listingID });
  };

  return !listings && loading ? (
    <Text fontWeight={600} fontSize={25}>
      Loading
    </Text>
  ) : !listings ? undefined : (
    <Container padding="90px">
      <Grid></Grid>
      <Grid gridTemplateColumns="1fr 300px" gap={100}>
        <Grid gap={6}>
          <Text fontWeight="bold" mb={2}>
            Cart &nbsp;<Span color="lightgray"> {data.listings.length}</Span>
          </Text>
          {listings.map((listing) => (
            <Grid
              gridTemplateColumns="500px 1fr auto"
              key={listing.listingID + listing.title}
            >
              <Grid gridTemplateColumns="70px auto" gap={4}>
                <Image
                  src={logo}
                  alt=""
                  bgColor="gray.100"
                  rounded="md"
                  h="70px"
                />
                <Box>
                  <Text fontWeight="bold">{listing.title}</Text>
                  <Text color="blackAlpha.600">{listing.description}</Text>
                </Box>
              </Grid>
              <Text textAlign="center">{listing.price}&nbsp;€</Text>

              <IconButton
                variant="ghost"
                cursor="pointer"
                color="blackAlpha.600"
                userSelect="none"
                _icon={{ boxSize: "30px" }}
                onClick={() => removeFromCart(listing.listingID.toString())}
              >
                <BiTrash />
              </IconButton>
            </Grid>
          ))}
        </Grid>

        {/* Order Summary */}
        <Grid
          px={10}
          py={5}
          backgroundColor="#E9E9E9"
          rounded="md"
          height="fit-content"
        >
          <Text fontWeight="bold">Order Summary</Text>
          <Flex justifyContent="space-between">
            <Text>Price</Text>

            <Text>
              €
              {0 +
                Number(
                  listings
                    .reduce(
                      (prev, cur) => Number(prev.toFixed(2)) + cur.price,
                      0
                    )
                    .toFixed(2)
                )}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Shipping</Text>

            <Text>0</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            borderBottomWidth="1px"
            borderColor="blackAlpha.300"
            borderStyle="solid"
          >
            <Text>Tax</Text>

            <Text>0</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontWeight="bold">Total Price</Text>

            <Text>
              €
              {0 +
                Number(
                  listings
                    .reduce(
                      (prev, cur) => Number(prev.toFixed(2)) + cur.price,
                      0
                    )
                    .toFixed(2)
                )}
            </Text>
          </Flex>
          <Button rounded="md" onClick={() => loadData("checkout")}>
            <Icon>
              <BsBag />
            </Icon>{" "}
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
