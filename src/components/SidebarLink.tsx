import { Link } from "@tanstack/react-router";
import type { LucideProps } from "lucide-react";
import React from "react";

type IconType = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface SidebarLinkProps {
  page: string;
  label: string;
  icon: IconType;
}

export default function SidebarLink({
  page,
  label,
  icon: Icon,
}: SidebarLinkProps) {
  return (
    <Link
      to={page}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
      activeProps={{
        className:
          "flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-colors mb-2",
      }}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
}