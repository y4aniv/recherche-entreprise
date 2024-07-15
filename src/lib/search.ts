import { SearchQuery } from "../interfaces/query";
import { Response } from "../interfaces/response";

export async function search(query: SearchQuery): Promise<Response> {
  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");

  const response = await fetch(
    `https://recherche-entreprises.api.gouv.fr/search?${queryString}`
  );
  const data = await response.json();
  return data;
}
