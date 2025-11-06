"use client";

import * as amplitude from "@amplitude/analytics-browser";

function initAmplitude() {
  if (typeof window !== "undefined") {
    amplitude.init("6c75b7a83ddf4da98893d880feef9aba", {
      autocapture: true,
      serverZone: "EU",
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
