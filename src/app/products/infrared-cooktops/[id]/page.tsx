import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODELS } from "@/data/infrared-cooktops";
import CooktopDetailClient from "./CooktopDetailClient";

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
    description: `${model.name} — ${model.modelNumber}, ${model.totalWattage}W total, ${model.surface} surface.`,
    alternates:  { canonical: `/products/infrared-cooktops/${id}` },
  };
}

export default async function CooktopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model  = MODELS.find((m) => m.id === id);
  if (!model) notFound();

  return <CooktopDetailClient model={model} />;
}
