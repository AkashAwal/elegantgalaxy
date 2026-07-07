import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODELS } from "@/data/air-coolers";
import CoolerDetailClient from "./CoolerDetailClient";

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
    title:       `${model.name} Air Cooler`,
    description: `Elegant Galaxy ${model.name} - available in ${model.capacities.map((c) => `${c}L`).join(", ")}.`,
    alternates:  { canonical: `/products/air-coolers/${id}` },
  };
}

export default async function CoolerDetailPage({
  params,
  searchParams,
}: {
  params:       Promise<{ id: string }>;
  searchParams: Promise<{ cap?: string }>;
}) {
  const { id }  = await params;
  const { cap } = await searchParams;
  const model   = MODELS.find((m) => m.id === id);
  if (!model) notFound();

  const parsedCap  = cap ? parseInt(cap, 10) : null;
  const initialCap = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;

  return <CoolerDetailClient model={model} initialCap={initialCap} />;
}
