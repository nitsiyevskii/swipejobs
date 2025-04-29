import React from "react";
import { render } from "@testing-library/react-native";
import JobHeaderSection from "../src/components/JobHeaderSection";

describe("JobHeaderSection", () => {
  it("renders title and company", () => {
    const { getByText } = render(
      <JobHeaderSection
        imageUrl="https://example.com/image.jpg"
        title="Test Job"
        company="Test Company"
      />
    );
    expect(getByText("Test Job")).toBeTruthy();
    expect(getByText("Test Company")).toBeTruthy();
  });
});
