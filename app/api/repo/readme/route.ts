import OctokitSingleton from "@/lib/octokit";

/**
 * API route handler for fetching the README of a specific repository from GitHub.
 * @returns Response containing README data or error message.
 */
export async function GET() {
  const githubName = process.env.GITHUB_NAME;

  try {
    // Fetch README data from GitHub API
    const data = await OctokitSingleton.get(
      `/repos/${githubName}/${githubName}/readme`,
    );
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Log and return error response
    console.error("Error fetching repository README:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch repository README" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
