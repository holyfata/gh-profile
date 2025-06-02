import { headers } from "next/headers";

const fetchApi = async (url: string) => {
  // Get the current host from request headers
  const host = (await headers()).get("host");
  // Determine protocol based on environment
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  // Construct the base API URL
  const apiUrl = `${protocol}://${host}/api`;
  // Fetch the specified URL from the API
  const response = await fetch(`${apiUrl}${url}`, { cache: "no-store" });
  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  // Read the response as JSON
  const data = await response.json();
  // Return the data
  return data;
};

export { fetchApi };
