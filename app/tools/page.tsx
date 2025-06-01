export default async function Tool() {
  return (
    <div>
      <h1>Tools</h1>
      <p>Tools are used to perform various tasks and operations.</p>
      <ul>
        <li>
          <h2>Tool 1. Async the github data</h2>
          <button>Click Me</button>
          <div>
            <p>This tool fetches data from GitHub asynchronously.</p>
            <p>
              It can be used to retrieve information about repositories, users,
              and more.
            </p>
          </div>
          <div>
            Result: <span>Loading...</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
