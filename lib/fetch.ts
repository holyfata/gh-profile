import { headers } from "next/headers";

/**
 * Fetches multiple user-related data fields in parallel from the API.
 * @returns An object containing all user data fields.
 */
const fetchData = async () => {
  // Get the current host from request headers
  const host = (await headers()).get("host");
  // Determine protocol based on environment
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  // Construct the base API URL
  const apiUrl = `${protocol}://${host}/api/v1`;

  // List of user data endpoints to fetch
  const functionIds = [
    "avatar",
    "bio",
    "company",
    "follower",
    "following",
    "location",
    "timezone",
    "name",
    "website",
  ];

  // Fetch all user data in parallel using Promise.all
  const results = await Promise.all(
    functionIds.map((id) =>
      fetch(`${apiUrl}/user/${id}`, { cache: "no-store" }).then((res) =>
        res.json(),
      ),
    ),
  );

  // Destructure the results into named variables for clarity
  const [
    avatarData,
    bioData,
    companyData,
    followerData,
    followingData,
    locationData,
    timezoneData,
    nameData,
    websiteData,
  ] = results;

  // Return an object containing all fetched user data
  return {
    avatarData,
    bioData,
    companyData,
    followerData,
    followingData,
    locationData,
    timezoneData,
    nameData,
    websiteData,
  };
};

export default fetchData;
