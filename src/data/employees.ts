export interface Employee {
  id: number;
  name: string;
  slug: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  department: string;
  responsibilities: string[];
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Ariful Goni",
    slug: "arifulgoni",
    role: "Country Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    email: "ariful@aiavatar.work",
    phone: "+880 1909-147875",
    department: "Management",
    responsibilities: [
      "Strategic AI avatar development",
      "Team leadership and innovation",
      "Stakeholder management",
      "AI technology expansion"
    ]
  },
  {
    id: 2,
    name: "Md Sakibul Hasan",
    slug: "sakibulhasan",
    role: "Admin & Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    email: "sakibul@aiavatar.work",
    phone: "+880 1670-045360",
    department: "Operations",
    responsibilities: [
      "Administrative oversight",
      "Operational management",
      "Resource allocation",
      "Process optimization"
    ]
  },
  {
    id: 3,
    name: "Hossainuzzaman",
    slug: "hossainuzzaman",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    email: "hossain@aiavatar.work",
    phone: "+880 1712-2872443",
    department: "Marketing",
    responsibilities: [
      "Financial reporting",
      "Budget management",
      "Audit coordination",
      "Tax compliance"
    ]
  },
  {
    id: 4,
    name: "Ashfaq Ul Haq Oni",
    slug: "ashfaqulhaqoni",
    role: "Senior Accountant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    email: "ashfaq@aiavatar.work",
    phone: "+880 1841-367330",
    department: "Finance",
    responsibilities: [
      "Financial analysis",
      "Account reconciliation",
      "Financial planning",
      "Risk assessment"
    ]
  },
  {
    id: 5,
    name: "Md Ashek Hasan Rafsun",
    slug: "ashekhasanrafsun",
    role: "Customer Success Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    email: "ashek.hasan@aiavatar.work",
    phone: "+880 1616-344922",
    department: "Customer Success",
    responsibilities: [
      "Financial reporting",
      "Budget management",
      "Audit coordination",
      "Tax compliance"
    ]
  },
  {
    id: 6,
    name: "Zahir Uddin Tipu",
    slug: "zahiruddintipu",
    role: "Designer Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    email: "zahir.uddin@aiavatar.work",
    phone: "+880 1827-122692",
    department: "Graphics",
    responsibilities: [
      "Financial reporting",
      "Budget management",
      "Audit coordination",
      "Tax compliance"
    ]
  },
  {
    id: 7,
    name: "Md Bacchu Khan",
    slug: "bacchukhan",
    role: "Market Researcher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    email: "bacchu.khan@aiavatar.work",
    phone: "+880 1774-325360",
    department: "Marketing",
    responsibilities: [
      "Financial reporting",
      "Budget management",
      "Audit coordination",
      "Tax compliance"
    ]
  },
  {
    id: 8,
    name: "Jannatul Supti",
    slug: "jannatulsupti",
    role: "Groath Marketing Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    email: "jannatul.supti@aiavatar.work",
    phone: "+880 0000-000000",
    department: "Marketing",
    responsibilities: [
      "Financial reporting",
      "Budget management",
      "Audit coordination",
      "Tax compliance"
    ]
  }
];