import useApi from "@/hooks/useApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Text,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { FC, HTMLAttributes, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link, useSearchParams } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Listings: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") || undefined;
    const size = searchParams.get("size") || undefined;
    loadData("listings", undefined, { page, size });
  }, [searchParams]);

  return (
    <Container mt={1}>
      <Grid minH="80vh" lg={{ gridTemplateColumns: "300px 1fr" }}>
        <Grid lg={{ pr: 5 }}></Grid>

        <Grid lg={{}}>
          <Box lg={{ pl: 50, borderLeftWidth: "2px" }}>
            {data &&
              (data.content as [{ title: string; price: number }]).map(
                (listing) => (
                  <Grid
                    lg={{ gridTemplateColumns: "200px 1fr" }}
                    borderTopWidth="2px"
                    pt={5}
                    pl={30}
                    pb={5}
                  >
                    <Image
                      src={logo}
                      alt=""
                      bgColor="LightGray"
                      rounded="md"
                      h="100%"
                    />
                    <Box ml={30} pt={5}>
                      <Text fontSize={18}>{listing.title}</Text>
                      <Text color="#B12704" fontSize={20} fontWeight={700}>
                        {"EUR "}
                        {listing.price}
                      </Text>
                    </Box>
                  </Grid>
                )
              )}
            <Box borderBottomWidth="2px"></Box>
          </Box>
          {data && (
            <Box
              justifyContent="center"
              display="flex"
              mt={5}
              lineHeight="60px"
              height="60px"
              gap={5}
              lg={{
                gap: 0,
                lineHeight: "40px",
                rounded: "md",
                borderColor: "lightgray",
                borderWidth: "1px",
                mx: "auto",
                width: "fit-content",
              }}
            >
              {data.first ? (
                <Button
                  variant="plain"
                  disabled={true}
                  flexGrow={1}
                  flexBasis={40}
                  justifyContent={"center"}
                  rounded="md"
                  borderColor="lightgray"
                  borderWidth="1px"
                  h="100%"
                  lg={{
                    borderWidth: 0,
                    flexBasis: 0,
                  }}
                >
                  <Icon>
                    <BiChevronLeft />
                  </Icon>{" "}
                  Previous
                </Button>
              ) : (
                <ChakraLink
                  variant="plain"
                  color="black"
                  asChild
                  _hover={{ backgroundColor: "bg.subtle" }}
                  flexGrow={1}
                  flexBasis={40}
                  justifyContent={"center"}
                  rounded="md"
                  borderColor="lightgray"
                  borderWidth="1px"
                  lg={{
                    borderWidth: 0,
                    flexBasis: 0,
                  }}
                >
                  <Link to={{ search: `?page=${data.number - 1}` }}>
                    <Button variant="plain" border="none">
                      <Icon>
                        <BiChevronLeft />
                      </Icon>{" "}
                      Previous
                    </Button>
                  </Link>
                </ChakraLink>
              )}
              <Box hideBelow="lg" display="flex">
                <ChakraLink
                  variant="plain"
                  color="black"
                  asChild
                  _hover={{ backgroundColor: "bg.subtle" }}
                >
                  <Link to={{ search: `?page=0` }}>
                    <Button variant="plain">1</Button>
                  </Link>
                </ChakraLink>

                {data.totalPages > 2 && (
                  <Button variant="plain" backgroundColor="bg.subtle" h="100%">
                    {data.number + 1}
                  </Button>
                )}

                {data.totalPages > 1 && (
                  <ChakraLink asChild _hover={{ backgroundColor: "bg.subtle" }}>
                    <Link to={{ search: `?page=${data.totalPages - 1}` }}>
                      <Button variant="plain">{data.totalPages}</Button>
                    </Link>
                  </ChakraLink>
                )}
              </Box>
              {data.last ? (
                <Button
                  variant="plain"
                  disabled={true}
                  flexGrow={1}
                  flexBasis={40}
                  justifyContent={"center"}
                  rounded="md"
                  borderColor="lightgray"
                  borderWidth="1px"
                  lg={{
                    borderWidth: 0,
                    flexBasis: 0,
                  }}
                  h="100%"
                >
                  Next{" "}
                  <Icon>
                    <BiChevronRight />
                  </Icon>
                </Button>
              ) : (
                <ChakraLink
                  variant="plain"
                  color="black"
                  asChild
                  _hover={{ backgroundColor: "bg.subtle" }}
                  flexGrow={1}
                  flexBasis={40}
                  justifyContent={"center"}
                  rounded="md"
                  borderColor="lightgray"
                  borderWidth="1px"
                  lg={{
                    borderWidth: 0,
                    flexBasis: 0,
                  }}
                >
                  <Link to={{ search: `?page=${data.number + 1}` }}>
                    <Button variant="plain">
                      Next{" "}
                      <Icon>
                        <BiChevronRight />
                      </Icon>
                    </Button>
                  </Link>
                </ChakraLink>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Listings;
