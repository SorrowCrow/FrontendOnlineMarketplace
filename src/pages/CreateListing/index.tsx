import { Checkbox } from "@/components/ui/checkbox";
import useApi from "@/hooks/useApi";
import {
  Container,
  Box,
  Button,
  Field,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field as FormikField } from "formik";
import { FC, HTMLAttributes } from "react";

const CreateListing: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { loadData, loading, data } = useApi();

  return (
    <Container>
      <Box lg={{ pr: 2 }}>
        <Formik
          initialValues={{
            type: "SELL",
            title: "test Title",
            description: "test Description",
            price: 2,
            priceUnit: "PIECE",
            location: "RIGA",
            userID: 1,
            categoryID: 1,
          }}
          onSubmit={(values) => {
            loadData("createListing", {
              ...values,
            });
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack gap={4} align="flex-start">
                <Text fontWeight={600} fontSize={25}>
                  Create Listing
                </Text>
                {/* <Field.Root>
                  <Field.Label htmlFor="type">Type</Field.Label>
                  <FormikField
                    as={Input}
                    id="type"
                    name="type"
                    type="text"
                    rounded="md"
                    placeholder="SELL"
                  />
                </Field.Root> */}
                <Field.Root>
                  <Field.Label htmlFor="title">Title</Field.Label>
                  <FormikField
                    as={Input}
                    id="title"
                    name="title"
                    type="text"
                    rounded="md"
                    placeholder="Title"
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label htmlFor="description">Description</Field.Label>
                  <FormikField
                    as={Input}
                    id="description"
                    name="description"
                    type="text"
                    rounded="md"
                    placeholder="Description"
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label htmlFor="type">Price</Field.Label>
                  <FormikField
                    as={Input}
                    id="price"
                    name="price"
                    type="number"
                    rounded="md"
                    placeholder="1.5"
                  />
                </Field.Root>
                <Button
                  type="submit"
                  width="full"
                  textTransform="uppercase"
                  rounded="sm"
                  disabled={loading}
                >
                  Create listing
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default CreateListing;
