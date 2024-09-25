"use client"
import { SaurCard } from "@/components/gallery/SaurCard"

export default function Page({ params }: { params: { genus: string } }) {
  const search = params.genus

  return <SaurCard props={search} />
}
