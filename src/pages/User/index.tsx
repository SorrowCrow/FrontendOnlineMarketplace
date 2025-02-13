import { FC, HTMLAttributes, useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import {
  Container,
  Box,
  Button,
  Field,
  Input,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { Formik, Field as FormikField } from "formik";

const User: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  useEffect(() => {
    loadData("getUser");
  }, []);
  console.log(data);

  return loading ? (
    <Text fontWeight={600} fontSize={25}>
      Loading
    </Text>
  ) : !data || !data.name || !data.surname || !data.email ? (
    <Text fontWeight={600} fontSize={25}>
      Unauthenticated
    </Text>
  ) : (
    <Container>
      <Formik
        initialValues={{
          email: data.email,
          name: data.name,
          surname: data.surname,
        }}
        onSubmit={(values) => {
          loadData("updateUser", {
            email: values.email,
            name: values.name,
            surname: values.surname,
          });
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Text fontWeight={600} fontSize={25}>
              User Page
            </Text>
            <Grid templateColumns="1fr 1fr" gap={8}>
              <Grid templateColumns="auto 1fr" gap={5}>
                <Box
                  w={100}
                  h={100}
                  backgroundColor="lightblue"
                  rounded="full"
                />
                <Box>
                  <Text fontWeight="bold" fontSize={22}>
                    {data.name + " " + data.surname}
                  </Text>
                  <Text>{data.email}</Text>
                </Box>
              </Grid>
              <Grid justifyContent="end" alignItems="center">
                <Button
                  type="submit"
                  width="full"
                  rounded="md"
                  disabled={loading}
                >
                  Submit
                </Button>
              </Grid>
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
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default User;
