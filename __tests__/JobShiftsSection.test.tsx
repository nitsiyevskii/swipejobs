import React from "react";
import { render } from "@testing-library/react-native";
import JobShiftsSection from "../src/components/JobShiftsSection";

describe("JobShiftsSection", () => {
  it("renders all shift dates", () => {
    const shifts = [
      { startDate: "2024-04-01T08:00:00Z", endDate: "2024-04-01T17:00:00Z" },
      { startDate: "2024-04-02T08:00:00Z", endDate: "2024-04-02T17:00:00Z" },
    ];
    const { getByText, getAllByText } = render(
      <JobShiftsSection shifts={shifts} />
    );
    expect(getByText("Shift Dates")).toBeTruthy();
    expect(getAllByText(/2024/)).toHaveLength(2);
  });
});
