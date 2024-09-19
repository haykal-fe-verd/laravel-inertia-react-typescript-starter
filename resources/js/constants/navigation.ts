interface guestNavigationType {
  name: string;
  href: string;
}
export const guestNavigation: guestNavigationType[] = [
  { name: "Home", href: route("home") },
];

interface authNavigationType {
  name: string;
  href: string;
}
export const authNavigation: authNavigationType[] = [
  { name: "Dashboard", href: route("dashboard") },
];
