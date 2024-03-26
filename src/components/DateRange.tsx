import React, { useEffect, useState } from "react";
import { DateRangeProps } from "../types/DateRange.type";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box } from "@mui/material";

const now = new Date();

export const DateRange = (props: DateRangeProps) => {
  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(now);
  useEffect(() => {
    props.onChange([startDate, endDate]);
  }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display={"flex"} justifyContent={"center"}>
        <DateTimePicker
          value={dayjs(startDate)}
          onChange={(newValue) => setStartDate(newValue.toDate())}
          sx={{ marginRight: "10px" }}
        />
        <DateTimePicker
          value={dayjs(endDate)}
          onChange={(newValue) => setEndDate(newValue.toDate())}
        />
      </Box>
    </LocalizationProvider>
  );
};
