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
    title:       model.name,
    description: `${model.name} - ${model.modelNumber}, ${model.capacity}L, ${model.airDelivery} CMH air delivery.`,
    alternates:  { canonical: `/products/air-coolers/${id}` },
  };
}

export default async function CoolerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model  = MODELS.find((m) => m.id === id);
  if (!model) notFound();

  return <CoolerDetailClient model={model} />;
}
