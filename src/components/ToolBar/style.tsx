import css from "styled-jsx/css";

export const ToolContainer = css`
  .tool-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .tool-container .svg {
    min-width: 16px;
    cursor: pointer;
  }

  @media (max-width: 460px) {
    .tool-container {
      justify-self: center;
      width: 100%;
      justify-content: space-between;
    }

    .tool-container .svg {
      width: 30px;
    }
  }
`;