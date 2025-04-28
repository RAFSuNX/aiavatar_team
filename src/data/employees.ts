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
    name: "ARIFUL GONI",
    slug: "arifulgoni",
    role: "Country Director",
    image: "https://i.ibb.co.com/J2fbMJp/ariful.png",
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
    name: "MD SAKIBUL HASAN",
    slug: "sakibulhasan",
    role: "Operations Lead & Admin",
    image: "https://i.ibb.co.com/XWnhqp3/sakibul.png",
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
    name: "HOSSAINUZZAMAN",
    slug: "hossainuzzaman",
    role: "Marketing Lead",
    image: "https://i.ibb.co.com/5rKJjrB/hossainuzzaman.png",
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
    name: "ASHFAQ UL HAQ ONI",
    slug: "ashfaqulhaqoni",
    role: "Senior Accountant",
    image: "https://i.ibb.co.com/Y8zVZDc/ashfaq.jpg",
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
    name: "MD ASHEK HASAN RAFSUN",
    slug: "ashekhasanrafsun",
    role: "Project Specialist",
    image: "https://i.ibb.co.com/x2b9z2q/20250110-165006-2.jpg",
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
    name: "ZAHIR UDDIN TIPU",
    slug: "zahiruddintipu",
    role: "Lead Designer",
    image: "https://i.ibb.co.com/frcD5Zf/zahir.jpg",
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
  // {
  //   id: 7,
  //   name: "MD BACCHU KHAN",
  //   slug: "bacchukhan",
  //   role: "Market Research Analyst",
  //   image: "https://i.imgur.com/7890123.png",
  //   email: "bacchu.khan@aiavatar.work",
  //   phone: "+880 1774-325360",
  //   department: "Marketing",
  //   responsibilities: [
  //     "Financial reporting",
  //     "Budget management",
  //     "Audit coordination",
  //     "Tax compliance"
  //   ]
  // },
  {
    id: 8,
    name: "Rawnak Jahan",
    slug: "rawnakjahan",
    role: "Growth Marketing Officer",
    image: "https://i.postimg.cc/7PJCX5yG/Photo-Grid-Plus-1745078566334.jpg",
    email: "rawnak.jahan@aiavatar.work",
    phone: "+880 1604-019908",
    department: "Marketing",
    responsibilities: [
      "Community building & event coordination",
      "Social media & communication skills",
      "Affiliate recruitment & outreach",
      "Strategic partnerships & needs assessment"
    ]
  },
  {
    id: 9,
    name: "Aftab Ayub Onick",
    slug: "aftabayubonick",
    role: "Video Editor",
    image: "https://i.postimg.cc/1XPDPhk6/Aftab-Ayub-Onick-1.jpg",
    email: "aftab.ayub@aiavatar.com.bd",
    phone: "+880 1634-305675",
    department: "Marketing",
    responsibilities: [
      "Generate Ai Videos",
      "Edit Videos",
      "Edit Ai Avatars",
      "Create Static & Motion Contents"
    ]
  }
];
