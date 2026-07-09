"use client";

import { useCallback, useState } from "react";
import SearchParamSync from "@/components/SearchParamSync";
import AirCoolersGrid from "./AirCoolersGrid";
import AirCoolersClient from "./AirCoolersClient";

/**
 * Picks between the plain category grid and the filterable listing view
 * based on the URL's query string, read client-side after mount so the
 * route itself stays statically pre-rendered (see SearchParamSync).
 */
export default function AirCoolersLanding() {
  const [filtered, setFiltered] = useState(false);

  const syncMode = useCallback((params: URLSearchParams) => {
    if (params.get("type") || params.get("cap")) setFiltered(true);
  }, []);

  return (
    <>
      <SearchParamSync onParams={syncMode} />
      {filtered ? <AirCoolersClient /> : <AirCoolersGrid />}
    </>
  );
}
