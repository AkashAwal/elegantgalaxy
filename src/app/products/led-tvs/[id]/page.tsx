import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODELS } from "@/data/led-tvs";
import TvDetailClient from "./TvDetailClient";

export async function generateStaticParams() {
  return MODELS.map((m) => ({ id: m.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const model  = MODELS.find((m) => m.id === id);
  if (!model) return {};
  return {
    title:       model.platform,
    description: `Elegant Galaxy ${model.platform} - available in ${model.sizes.map((s) => `${s}"`).join(", ")}.`,
    alternates:  { canonical: `/products/led-tvs/${id}` },
  };
}

export default async function TvDetailPage({
  params,
  searchParams,
}: {
  params:       Promise<{ id: string }>;
  searchParams: Promise<{ size?: string }>;
}) {
  const { id }   = await params;
  const { size } = await searchParams;
  const model    = MODELS.find((m) => m.id === id);
  if (!model) notFound();

  const parsedSize    = size ? parseInt(size, 10) : null;
  const initialSize   = parsedSize && !Number.isNaN(parsedSize) ? parsedSize : null;

  return <TvDetailClient model={model} initialSize={initialSize} />;
}
