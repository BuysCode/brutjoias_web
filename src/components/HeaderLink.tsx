import { Link } from "@tanstack/react-router";

export default function HeaderLink({ page, label }: { page: string ; label: string}) {
  return (
    <Link to={page} className="hover:underline text-lg p-4 rounded-lg">
      {label}
    </Link>
  )
}