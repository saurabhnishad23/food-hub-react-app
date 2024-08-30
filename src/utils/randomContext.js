import { createContext } from "react";

const randomContext = createContext({
  productInfo: {
    name: "pizza",
    cuisines: "italian",
  },
});

export default randomContext;
