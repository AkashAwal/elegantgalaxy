import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODELS } from "@/data/washing-machines";
import WasherDetailClient from "./WasherDetailClient";

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
    description: `${model.name} — ${model.modelNumber}, ${model.capacity}kg, ${model.spinSpeed} RPM spin speed.`,
  };
}

export default async function WasherDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model  = MODELS.find((m) => m.id === id);
  if (!model) notFound();

  return <WasherDetailClient model={model} />;
}
