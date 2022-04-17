import UserCalendar from "./components/UserCalendar/UserCalendar";
import TeamCalendarContextProvider from "./store/team-calendar-context";

function App() {
  return (
    <>
      {/* <CalendarContextProvider>
        <Calendar />
      </CalendarContextProvider> */}

      <TeamCalendarContextProvider>
        <UserCalendar />
      </TeamCalendarContextProvider>

      {/* <TeamCalendar /> */}
    </>
  );
}

export default App;
