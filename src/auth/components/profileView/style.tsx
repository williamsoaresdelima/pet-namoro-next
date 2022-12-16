import css from "styled-jsx/css";

export const styles = css`
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		padding-top: 30px;
	}

	.container-box {
		width: 400px;
		display: flex;
		background: var(--W3);
		border-radius: 6px;
		padding: 18px;
		align-self: center;
		flex-direction: column;


		-webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
	}

	.row {
		display: flex;
	}

	.input {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 12px;
	}

	label {
		margin-left: 12px;
		font-size: 16px;
		font-weight: 700;
	}

	input {
		font-size: 20px;
		color: var(--W10);
		border: none;
		border-radius: 6px;
		padding: 4px 12px;
	}
`;