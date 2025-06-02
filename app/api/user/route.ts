import OctokitSingleton from "@/lib/octokit";

/**
 * API route handler for fetching authenticated user data from GitHub.
 * @returns Response containing user data or error message.
 */
export async function GET() {
  try {
    // Fetch user data from GitHub API
    const data = await OctokitSingleton.get("/user");
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Log and return error response
    console.error("Error fetching user data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch user data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
