import { createContext } from "react";

const userContext = createContext({
  user: { name: "dcba", email: "dcba@gmail.com" },
});

export default userContext;
