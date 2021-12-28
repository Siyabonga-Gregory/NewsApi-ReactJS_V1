import React from "react";
import { testData } from "./Test";

export const TestParent = () => {
  return (
    <>
      <div>
        {testData.map((data, key) => {
          return (
            <div key={key}>
              {data.author +
                " , " +
                data.author +
                " ," +
                data.author +
                ", " +
                data.author}
            </div>
          );
        })}
      </div>
    </>
  );
};