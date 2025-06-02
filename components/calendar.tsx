import GitHubCalendar from "react-github-calendar";

/**
 * Calendar component displays the user's GitHub contribution calendar.
 * The username is currently hardcoded as "holyfata".
 */
const Calendar: React.FC = () => (
  <div className="mt-4">
    <div className="pb-2">
      {/* TODO: Replace hardcoded contribution count with dynamic data if available */}
      181 contributions in the last year
    </div>
    <div className="p-6 border border-solid border-gray-300 rounded-md mt-4">
      <GitHubCalendar username="holyfata" />
    </div>
  </div>
);

export default Calendar;
