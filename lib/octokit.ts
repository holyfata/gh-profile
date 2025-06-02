import { Octokit } from "octokit";

/**
 * Singleton for managing a single Octokit instance.
 * Guarantees only one Octokit instance is used throughout the app.
 */
class OctokitSingleton {
  // Singleton Octokit instance
  private static instance: Octokit | null = null;

  // Prevent direct instantiation
  private constructor() {}

  /**
   * Returns the singleton Octokit instance.
   * Creates a new instance if it doesn't exist.
   */
  public static getInstance(): Octokit {
    if (!this.instance) {
      this.instance = new Octokit({
        auth: process.env.GITHUB_TOKEN,
      });
    }
    return this.instance;
  }

  /**
   * Sends a GET request to the specified GitHub API endpoint.
   * @param url API endpoint (e.g., '/users/username')
   * @returns Response data if successful.
   * @throws Error if the request fails.
   */
  public static async get(url: string) {
    const octokit = this.getInstance();
    try {
      const response = await octokit.request(`GET ${url}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`Failed to fetch data from ${url}: ${response.status}`);
    } catch (error) {
      console.error(`Request to ${url} failed:`, error);
      throw error;
    }
  }

  /**
   * Sends a POST request to the specified GitHub API endpoint.
   * @param url API endpoint (e.g., '/markdown')
   * @param data Request payload to send in the POST body
   * @returns Response data if successful.
   * @throws Error if the request fails.
   */
  public static async post<T>(url: string, data: T) {
    const octokit = this.getInstance();
    try {
      const response = await octokit.request(`POST ${url}`, {
        data,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      throw new Error(`Failed to post data to ${url}: ${response.status}`);
    } catch (error) {
      console.error(`POST request to ${url} failed:`, error);
      throw error;
    }
  }
}

export default OctokitSingleton;
