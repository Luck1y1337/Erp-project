import axios from "../../config/axios";
import { useMutation } from "@tanstack/react-query";
import type { LoginForm } from "../../types/login.type";
import Endpoints from "../../config/endpoints";

export const useLogin = () => {
  const onLogin = async (payload: LoginForm) => {
    const url = Endpoints.auth.login;
    const response = await axios.post(url, {
      identifier: payload.email,
      password: payload.password
    });
    return response.data;
  };

  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginForm) => await onLogin(data),
  });
  
  return { mutateAsync };
};
