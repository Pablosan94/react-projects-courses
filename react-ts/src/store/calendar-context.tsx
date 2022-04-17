import { isAfter, isBefore } from "date-fns";
import React, { useState } from "react";

type CalendarContextType = {
  selectedStartDate: Date | undefined;
  selectedEndDate: Date | undefined;
  selectDate: (date: Date) => (Date | undefined)[];
  unselectDate: () => void;
}

export const CalendarContext = React.createContext<CalendarContextType>({
  selectedStartDate: undefined,
  selectedEndDate: undefined,
  selectDate: (date: Date) => [],
  unselectDate: () => {}
});

const CalendarContextProvider: React.FC = (props) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const selectDateHandler = (date: Date): (Date | undefined)[] => {    
    if (startDate === undefined) {
      setStartDate(date);
    } else {
      // Reset range
      if (endDate !== undefined) {
        setStartDate(date);
        setEndDate(undefined);
      }

      // Control correct ranges
      if (isBefore(date, startDate)) {
        setStartDate(date);
      } else if (isAfter(date, startDate) && endDate === undefined) {
        setEndDate(date);
      }
    }

    return [startDate, endDate];
  }

  const unselectDateHandler = (): void => {
    setStartDate(undefined);
    setEndDate(undefined);
  }

  const contextValue: CalendarContextType = {
    selectedStartDate: startDate,
    selectedEndDate: endDate,
    selectDate: selectDateHandler,
    unselectDate: unselectDateHandler
  }

  return <CalendarContext.Provider value={contextValue}>
    {props.children}
  </CalendarContext.Provider>
}

export default CalendarContextProvider;