export async function GET() {
  // Fetch the README.md file from the repository
  const response = await fetch(
    "https://raw.githubusercontent.com/holyfata/holyfata/refs/heads/main/README.md",
    { cache: "no-store" },
  );

  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    throw new Error("Failed to fetch README.md");
  }

  // Read the response text
  const data = await response.text();

  // Return the data as a JSON response
  return new Response(data);
}
