import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "List 100 | Anmol Rathi",
  description: "100 things I want to do before I die.",
}

export default function List100Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


