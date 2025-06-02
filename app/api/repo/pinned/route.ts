import axios from "axios";

/**
 * API route handler for fetching the README of a specific repository from GitHub.
 * @returns Response containing README data or error message.
 */
export async function GET() {
  const githubName = process.env.GITHUB_NAME;

  try {
    // Fetch README data from GitHub API
    const response = await fetch(
      `https://pinned.berrysauce.dev/get/${githubName}`,
    );
    const data = await response.json();
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
