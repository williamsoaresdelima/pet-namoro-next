import React from "react";
import SignUpForm from "../src/auth/components/signupForm/SignupForm";
import LoadingSpinner from "../src/components/Loading/Loading";

const SignUp = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

	return (
		<>
			{isLoading && <LoadingSpinner/>}
			<SignUpForm setLoading={setIsLoading}/>
		</>
	)
};

export default SignUp;