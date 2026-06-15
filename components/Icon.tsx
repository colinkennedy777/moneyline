import {
  Home,
  ShieldCheck,
  Award,
  Building2,
  Tractor,
  RefreshCw,
  TrendingDown,
  Users,
  Zap,
  MapPin,
  BarChart2,
  FileText,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Home,
  ShieldCheck,
  Award,
  Building2,
  Tractor,
  RefreshCw,
  TrendingDown,
  Users,
  Zap,
  MapPin,
  BarChart2,
  FileText,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Home;
  return <Cmp className={className} />;
}
