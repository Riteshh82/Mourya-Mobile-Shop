import {
  Smartphone,
  ShieldCheck,
  Headphones,
  Ear,
  Zap,
  Cable,
  BatteryCharging,
  Volume2,
  Car,
  MemoryStick,
  Usb,
  Sparkles,
  Wifi,
  PhoneCall,
  Send,
  Ticket,
  Globe,
  Wrench,
} from "lucide-react";

// Central map: config `icon` key -> lucide component.
// Add a new key here whenever you add a product/service with a new icon.
export const iconMap = {
  cover: Smartphone,
  shield: ShieldCheck,
  earphone: Headphones,
  earbuds: Ear,
  charger: Zap,
  cable: Cable,
  powerbank: BatteryCharging,
  speaker: Volume2,
  holder: Car,
  memory: MemoryStick,
  adapter: Usb,
  other: Sparkles,
  sim: Wifi,
  recharge: PhoneCall,
  transfer: Send,
  ticket: Ticket,
  online: Globe,
  assist: Wrench,
};

export function CategoryIcon({ name, className = "h-6 w-6" }) {
  const Icon = iconMap[name] || Sparkles;
  return <Icon className={className} strokeWidth={1.8} />;
}
