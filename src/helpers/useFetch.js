import { useFetch } from "use-http";

export const useFetchHook = async () => {
  const { request, response, data, loading, error } = useFetch();

  const getInitialProducts = async () => {
    const initialProducts = await request.get("../db/data");
    console.log(initialProducts);
    return initialProducts;
  };
  getInitialProducts();
};
