import { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

export const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};
