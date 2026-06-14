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
