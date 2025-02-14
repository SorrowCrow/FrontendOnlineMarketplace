import useApi from "@/hooks/useApi";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BsBag } from "react-icons/bs";

const ListingPage: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();
  const {
    loadData: loadCartData,
    loading: loadingCart,
    data: cartData,
  } = useApi();

  const { id } = useParams();

  const [listing, setListing] = useState<{
    title: string;
    price: number;
    listingID: number;
    description: string;
    unit: string;
    location: string;
    category: {
      type: string;
    };
  }>();

  const [cart, setCart] = useState<any>([]);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    loadData("getListingById", undefined, undefined, { id });
    loadCartData("getUser");
  }, [id]);

  useEffect(() => {
    if (data && data.listingID) {
      setListing(data);
    }
  }, [data]);

  useEffect(() => {
    if (cartData && cartData.cart) {
      setCart(cartData.cart.listings);
      setAdded(
        cartData.cart.listings.findIndex(
          (item) => item.listingID === listing.listingID
        ) !== -1
      );
    } else if (cartData && cartData.listings) {
      setCart(cartData.listings);
      setAdded(
        cartData.listings.findIndex(
          (item) => item.listingID === listing.listingID
        ) !== -1
      );
    }
  }, [cartData]);

  return (
    <Container>
      <Grid>
        <ChakraLink
          variant="plain"
          color="black"
          asChild
          _hover={{ backgroundColor: "bg.subtle" }}
          justifySelf="end"
        >
          <Link to={{ pathname: "/listings" }}>Back to shopping</Link>
        </ChakraLink>
        <Grid lg={{ px: 40, gridTemplateColumns: "1fr 1fr" }} gap={15}>
          <Image src={logo} alt="" bgColor="LightGray" rounded="md" />
          <Grid pt={15} h="fit-content">
            {listing && (
              <>
                <Text fontWeight="bold" fontSize={20}>
                  {listing.title}
                </Text>
                <Text>€{listing.price}</Text>
                {!added ? (
                  <Button
                    rounded="md"
                    onClick={() =>
                      loadCartData("addToCart", undefined, undefined, {
                        listingID: listing.listingID.toString(),
                      })
                    }
                    w="fit-content"
                  >
                    <Icon>
                      <BsBag />
                    </Icon>
                    Add to Bag
                  </Button>
                ) : (
                  <Button
                    rounded="md"
                    onClick={() =>
                      loadData("removeFromCart", undefined, undefined, {
                        listingID: listing.listingID.toString(),
                      })
                    }
                    w="fit-content"
                  >
                    <Icon>
                      <BsBag />
                    </Icon>
                    Remove from Bag
                  </Button>
                )}
                <Grid
                  templateColumns="auto 1fr"
                  columnGap={8}
                  color="blackAlpha.700"
                >
                  <Text>Description</Text>
                  <Text>{listing.description}</Text>
                  <Text>Unit</Text>
                  <Text>{listing.unit}</Text>
                  <Text>Location</Text>
                  <Text>{listing.location}</Text>
                  <Text>Category</Text>
                  <Text>{listing.category.type}</Text>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListingPage;
