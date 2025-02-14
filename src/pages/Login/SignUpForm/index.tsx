import { Checkbox } from "@/components/ui/checkbox";
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
import { FC, HTMLAttributes, useState } from "react";

const SignUpForm: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  const [email, setEmail] = useState<string>();

  return (
    <Box
      pt={8}
      mt={10}
      lg={{
        pl: 2,
        borderTopWidth: "0px",
        borderLeftWidth: "1px",
        mt: 0,
        pt: 0,
      }}
      borderTopWidth="1px"
    >
      <Formik
        initialValues={{
          signupemail: "",
          password: "",
          name: "",
          surname: "",
        }}
        onSubmit={(values) => {
          loadData("signup", {
            email: values.signupemail,
            password: values.password,
            name: values.name,
            surname: values.surname,
          });
          setEmail(values.signupemail);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack gap={4} align="flex-start">
              <Text fontWeight={600} fontSize={25}>
                Sign Up
              </Text>
              <Field.Root>
                <Field.Label htmlFor="signupemail">Email Address</Field.Label>
                <FormikField
                  as={Input}
                  id="signupemail"
                  name="signupemail"
                  type="signupemail"
                  rounded="md"
                />
                <Field.ErrorText>{errors.signupemail}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={!!errors.password && touched.password}>
                <Field.Label htmlFor="password">Password</Field.Label>
                <FormikField
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  rounded="md"
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
              <Field.Root>
                <Field.Label htmlFor="name">Name</Field.Label>
                <FormikField
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  rounded="md"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="surname">Surname</Field.Label>
                <FormikField
                  as={Input}
                  id="surname"
                  name="surname"
                  type="text"
                  rounded="md"
                />
              </Field.Root>
              <Button
                type="submit"
                width="full"
                disabled={loading}
                rounded="sm"
                textTransform="uppercase"
              >
                Sign up
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
                    <Alert.Title>
                      Signup successful, email for verification has been sent
                    </Alert.Title>
                    <Alert.Description>
                      {email && (
                        <Button
                          onClick={() =>
                            loadData("resendVerification", undefined, { email })
                          }
                        >
                          Resend
                        </Button>
                      )}
                    </Alert.Description>
                    <Alert.Description />
                  </Alert.Content>
                </Alert.Root>
              ) : data &&
                data.message &&
                data.message === "Verification email resent successfully!" ? (
                <Alert.Root status="success">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>
                      Verification email resent successfully!
                    </Alert.Title>
                    <Alert.Description />
                  </Alert.Content>
                </Alert.Root>
              ) : data ? (
                <Alert.Root status="error">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Signup unsuccessful</Alert.Title>
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

export default SignUpForm;
