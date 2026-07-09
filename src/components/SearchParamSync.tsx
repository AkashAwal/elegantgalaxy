"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SyncInner({ onParams }: { onParams: (params: URLSearchParams) => void }) {
  const params = useSearchParams();
  useEffect(() => { onParams(params); }, [params, onParams]);
  return null;
}

/**
 * Reads the URL's query string on the client, after hydration, and hands it
 * to `onParams` - lets a page stay statically pre-rendered (no server-side
 * `searchParams` read, which forces per-request dynamic rendering) while
 * still supporting deep-link query params like `?size=55` or `?cap=9`.
 */
export default function SearchParamSync({ onParams }: { onParams: (params: URLSearchParams) => void }) {
  return (
    <Suspense fallback={null}>
      <SyncInner onParams={onParams} />
    </Suspense>
  );
}
