import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
#root {
  font-family : "Inter";
  font-weight : 400;
  font-style: normal;
}
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
overflow-x:hidden;
 
  border: none;
}
li {
  list-style: none;
  color: inherit;
}
a {
  text-decoration: none ;
}
`;
export default GlobalStyle;
