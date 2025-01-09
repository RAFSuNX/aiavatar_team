export interface Employee {
  id: number;
  name: string;
  slug: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  imageUrl: string;
  responsibilities: string[];
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "ARIFUL GONI",
    slug: "arifulgoni",
    position: "AI Avatar Director",
    department: "Management",
    email: "ariful.goni@aiavatar.bd",
    phone: "+880 123-456789",
    imageUrl: "/placeholder.svg?height=220&width=400",
    responsibilities: [
      "Strategic AI avatar development",
      "Team leadership and innovation",
      "Stakeholder management",
      "AI technology expansion",
    ],
  },
  {
    id: 2,
    name: "MD SAKIBUL HASAN",
    slug: "sakibulhasan",
    position: "AI Operations Lead",
    department: "Operations",
    email: "sakibul.hasan@aiavatar.bd",
    phone: "+880 123-456789",
    imageUrl: "/placeholder.svg?height=220&width=400",
    responsibilities: [
      "AI system administration",
      "Avatar operations oversight",
      "Process optimization for AI",
      "AI team coordination",
    ],
  },
  // ... other employees
];

