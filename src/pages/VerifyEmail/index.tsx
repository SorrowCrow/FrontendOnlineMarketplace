import useApi from "@/hooks/useApi";
import {
  Alert,
  Button,
  Container,
  Spinner,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FC, HTMLAttributes, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VerifyEmail: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const [searchParams] = useSearchParams();

  const { loadData, loading, data } = useApi();

  useEffect(() => {
    const token = searchParams.get("token") || undefined;
    if (!token) {
      return;
    }

    loadData("verifyEmail", undefined, { token });
  }, []);
  console.log(data);

  return (
    <Container>
      {loading ? (
        <Alert.Root>
          <Alert.Indicator>
            <Spinner size="sm" />
          </Alert.Indicator>
          <Alert.Content>
            <Alert.Title>Loading </Alert.Title>
            <Alert.Description />
          </Alert.Content>
        </Alert.Root>
      ) : data &&
        data.message &&
        data.message === "Email verified successfully! You can now log in." ? (
        <Alert.Root status="success">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Verification successful</Alert.Title>
            <Alert.Description>
              <ChakraLink variant="plain" asChild>
                <Link to={{ pathname: `/login` }}>
                  <Button variant="plain">Click here for Sign In page</Button>
                </Link>
              </ChakraLink>
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      ) : data ? (
        <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Verification unsuccessful</Alert.Title>
            <Alert.Description />
          </Alert.Content>
        </Alert.Root>
      ) : undefined}
    </Container>
  );
};

export default VerifyEmail;
