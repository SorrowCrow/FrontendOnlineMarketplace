import { Container, Grid } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const Login: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <Container>
      <Grid lg={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <LogInForm />
        <SignUpForm />
      </Grid>
    </Container>
  );
};

export default Login;
