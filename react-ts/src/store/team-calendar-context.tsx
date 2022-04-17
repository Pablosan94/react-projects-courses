import React, { useState } from "react";

type TeamCalendarContextType = {
  selectedFilter: string;
  weeksToShow: number;
  selectFilter: (filter: string) => void;
};

export const TeamCalendarContext = React.createContext<TeamCalendarContextType>(
  {
    selectedFilter: "1week",
    weeksToShow: 1,
    selectFilter: (filter: string) => {},
  }
);

const TeamCalendarContextProvider: React.FC = (props) => {
  const [filter, setFilter] = useState<string>("1week");
  const [weeksToShow, setWeeksToShow] = useState<number>(1);

  const selectFilterHandler = (filter: string): void => {
    setFilter(filter);
    if (filter === "1week") {
      setWeeksToShow(1);
    } else if (filter === "1month") {
      setWeeksToShow(5);
    }
  };

  const contextValue: TeamCalendarContextType = {
    selectedFilter: filter,
    weeksToShow,
    selectFilter: selectFilterHandler,
  };

  return (
    <TeamCalendarContext.Provider value={contextValue}>
      {props.children}
    </TeamCalendarContext.Provider>
  );
};

export default TeamCalendarContextProvider;
