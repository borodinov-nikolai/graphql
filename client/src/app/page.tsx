import { HomePage } from "../views/homePage";
import { GET_PRODUCTS } from "@/entities/product";
import { getApolloClient } from "@/shared/libs/getApolloClient";


export default async function Home() {
  const client = getApolloClient()
  const {data} = await client.query({query: GET_PRODUCTS})
  return (
    <>
    <HomePage products={data.products} />
    </>
  );
}
