import { FormControl, Input, Box, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type FormValues = {
  number: Number;
};

function Form() {
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const history = useHistory();

  const onSubmit = (data: FormValues) => {
    const location = {
      pathname: "/home",
      state: { fromForm: data.number },
    };
    history.push(location);
  };

  return (
    <Box
      bg="gray.300"
      width="500px"
      height="500px"
      m="auto"
      p={10}
      pt={24}
      mt={20}
    >
      <Text p={6}>Enter a number:</Text>
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            bg="white"
            mb={8}
            name="number"
            ref={register({ required: true, pattern: /^[0-9]+$/i })}
          />
          {errors.number && (
            <Text color="red" mb={6}>
              This field is required and must be a number
            </Text>
          )}

          <Input type="submit" />
        </form>
      </FormControl>
    </Box>
  );
}

export default Form;
