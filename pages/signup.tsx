import React from "react";

import SignUpForm from "../src/auth/components/signupForm/SignupForm";
import CallLogin from "../src/components/CallLogin/callLogin";
import Head from "../src/components/Head/Head";
import LoadingSpinner from "../src/components/Loading/Loading";

const SignUp = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

	return (
		<>
      <Head title={`Namoro-Pet | Cadastro`}/>
			{isLoading && <LoadingSpinner/>}
			<SignUpForm setLoading={setIsLoading}/>
			<CallLogin/>
		</>
	)
};

export default SignUp;