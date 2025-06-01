import { getCache, setCache } from "@/lib/lite";

/**
 * Universal cache read utility.
 * Returns cached value if available, and asynchronously refreshes the cache in the background.
 * If cache is missing, fetches from DB and updates cache synchronously.
 *
 * @template T - The type of the value to be cached.
 * @param {string} cacheKey - The key used to identify the cached value.
 * @param {() => Promise<T | null>} fetchFromDb - Async function to fetch value from DB.
 * @returns {Promise<T | null>} - The cached or fetched value, or null if not found.
 */
export async function getWithCache<T>(
  cacheKey: string,
  fetchFromDb: () => Promise<T | null>,
): Promise<T | null> {
  let cachedValue: T | null = null;

  // Try to get value from cache
  try {
    cachedValue = (await getCache(cacheKey)) as T | null;
  } catch (error) {
    // Log cache read error, but continue to fetch from DB
    console.error(
      `[getWithCache] Error reading cache for key "${cacheKey}":`,
      error,
    );
  }

  if (cachedValue !== null) {
    // If cache hit, refresh cache asynchronously in the background
    fetchFromDb()
      .then((dbValue) => {
        // Only update cache if DB value is not null and different from cached value
        if (dbValue !== null && dbValue !== cachedValue) {
          setCache(cacheKey, dbValue as string).catch((error) => {
            // Log cache update error
            console.error(
              `[getWithCache] Error updating cache for key "${cacheKey}":`,
              error,
            );
          });
        }
      })
      .catch((error) => {
        // Log DB fetch error (background refresh)
        console.error(
          `[getWithCache] Error fetching from DB for key "${cacheKey}" (background refresh):`,
          error,
        );
      });
    // Return cached value immediately
    return cachedValue;
  }

  // If cache miss, fetch from DB synchronously
  try {
    const dbValue = await fetchFromDb();
    if (dbValue !== null) {
      try {
        await setCache(cacheKey, dbValue as string);
      } catch (error) {
        // Log cache set error, but still return DB value
        console.error(
          `[getWithCache] Error setting cache for key "${cacheKey}":`,
          error,
        );
      }
    }
    return dbValue;
  } catch (error) {
    // Log DB fetch error and return null
    console.error(
      `[getWithCache] Error fetching from DB for key "${cacheKey}":`,
      error,
    );
    return null;
  }
}
