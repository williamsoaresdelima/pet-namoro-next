import React from "react";
import LoginForm from "../src/auth/components/loginForm/LoginForm";
import LoadingSpinner from "../src/components/Loading/Loading";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

	return (
		<>
			{isLoading && <LoadingSpinner/>}
			<LoginForm setLoading={setIsLoading}/>
		</>
	)
};

export default Login;