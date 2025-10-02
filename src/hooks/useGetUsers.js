import { useContext } from "react";
import { ContextUser } from "../context/Users";

export function useGetUsers () {
  return useContext(ContextUser)
}
