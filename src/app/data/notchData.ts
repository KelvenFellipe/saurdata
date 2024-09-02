import { IconProps } from "@/app/components/Icon";
import { Bone, Calculator, Notebook, Search } from "lucide-react";

export const notchData: IconProps[] = [
  { IconTag: Calculator, link: "/calculator", name: "Calculator" },
  { IconTag: Notebook, link: "/notebook", name: "Notebook" },
  { IconTag: Search, link: "/search", name: "Search" },
  { IconTag: Bone, link: "/gallery", name: "Gallery" },
]