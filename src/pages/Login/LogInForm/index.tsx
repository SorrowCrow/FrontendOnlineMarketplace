import useApi from "@/hooks/useApi";
import {
  Alert,
  Box,
  Button,
  Field,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field as FormikField } from "formik";
import { FC, HTMLAttributes, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogInForm: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.message === "success") {
      setTimeout(() => {
        navigate("/listings");
      }, 2001);
    }
  }, [data]);

  return (
    <Box lg={{ pr: 2 }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          loadData("signin", {
            email: values.email,
            password: values.password,
          });
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack gap={4} align="flex-start">
              <Text fontWeight={600} fontSize={25}>
                Sign in
              </Text>
              <Field.Root>
                <Field.Label htmlFor="email">Email Address</Field.Label>
                <FormikField
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  rounded="md"
                  placeholder="email@email.com"
                />
              </Field.Root>
              <Field.Root invalid={!!errors.password && touched.password}>
                <Field.Label htmlFor="password">Password</Field.Label>
                <FormikField
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  rounded="md"
                  placeholder="password"
                  validate={(value: string) => {
                    let error;

                    // if (value.length < 6) {
                    //   error = "Password must contain at least 6 characters";
                    // }

                    return error;
                  }}
                />
                <Field.ErrorText>{errors.password}</Field.ErrorText>
              </Field.Root>
              <Button
                type="submit"
                width="full"
                textTransform="uppercase"
                rounded="sm"
                disabled={loading}
              >
                Sign in
              </Button>

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
              ) : data && data.message && data.message === "success" ? (
                <Alert.Root status="success">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Login successful </Alert.Title>
                    <Alert.Description />
                  </Alert.Content>
                </Alert.Root>
              ) : data ? (
                <Alert.Root status="error">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Login unsuccessful</Alert.Title>
                    <Alert.Description />
                  </Alert.Content>
                </Alert.Root>
              ) : undefined}
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LogInForm;
