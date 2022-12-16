import css from 'styled-jsx/css'

export default css.global`
  :root {
    --W1: #FFFFFF;
    --W2: #FAFAFA;
    --W3: #F3F3F3;
    --W4: #ECECEC;
    --W5: #DBDBDB;
    --W6: #C7C7C7;
    --W7: #A8A8A8;
    --W8: #8A8A8A;
    --W9: #6B6B6B;
    --W10: #4D4D4D;
    --W11: #2E2E2E;
    --W12: #0F0F0F;
    --B: #000000;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
    background: var(--W4);
  }

  h1, h2, h3, h4, h5, h6, p, span {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: var(--W12)
  }
`;