import { Checkbox } from "@/components/ui/checkbox";
import useApi from "@/hooks/useApi";
import { Box, Button, Field, Input, Text, VStack } from "@chakra-ui/react";
import { Formik, Field as FormikField } from "formik";
import { FC, HTMLAttributes, useEffect } from "react";

const LogInForm: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  return (
    <Box lg={{ pr: 2 }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
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
              <Field.Root>
                <FormikField as={Checkbox} id="rememberMe" name="rememberMe">
                  <span style={{ marginLeft: 10, verticalAlign: "top" }}>
                    Remember me?
                  </span>
                </FormikField>
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
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LogInForm;
