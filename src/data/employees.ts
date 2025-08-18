export interface Employee {
  id: number;
  name: string;
  slug: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  department: string;
  departmentCode: string;
  positionLevel: 'EXECUTIVE' | 'MANAGEMENT' | 'PROFESSIONAL' | 'SPECIALIST';
  employmentStatus: 'ACTIVE' | 'ON_LEAVE' | 'PROBATION' | 'TERMINATED';
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERN';
  reportsTo: string;
  clearanceLevel: 'EXECUTIVE' | 'INTERNAL' | 'RESTRICTED' | 'PUBLIC';
  officeLocation: string;
  dateJoined: string;
  responsibilities: string[];
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "ARIFUL GONI",
    slug: "AUS0012",
    role: "Country Director",
    image: "https://i.ibb.co.com/J2fbMJp/ariful.png",
    email: "ariful@aiavatar.work",
    phone: "+880 1909-147875",
    department: "Management",
    departmentCode: "MGT",
    positionLevel: "EXECUTIVE",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Board of Directors",
    clearanceLevel: "EXECUTIVE",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-01-15",
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
    slug: "ABD0003",
    role: "Operations Lead & Admin",
    image: "https://i.ibb.co.com/XWnhqp3/sakibul.png",
    email: "sakibul@aiavatar.work",
    phone: "+880 1670-045360",
    department: "Operations",
    departmentCode: "OPS",
    positionLevel: "MANAGEMENT",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Country Director",
    clearanceLevel: "EXECUTIVE",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-02-01",
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
    slug: "ABD0004",
    role: "Marketing Lead",
    image: "https://i.ibb.co.com/5rKJjrB/hossainuzzaman.png",
    email: "hossain@aiavatar.work",
    phone: "+880 1712-2872443",
    department: "Marketing",
    departmentCode: "MKT",
    positionLevel: "MANAGEMENT",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Country Director",
    clearanceLevel: "EXECUTIVE",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-02-15",
    responsibilities: [
      "Marketing strategy development",
      "Brand management",
      "Campaign coordination",
      "Market analysis"
    ]
  },
  {
    id: 4,
    name: "ASHFAQ UL HAQ ONI",
    slug: "ABD0007",
    role: "Senior Accountant",
    image: "https://i.ibb.co.com/Y8zVZDc/ashfaq.jpg",
    email: "ashfaq@aiavatar.work",
    phone: "+880 1841-367330",
    department: "Finance",
    departmentCode: "FIN",
    positionLevel: "PROFESSIONAL",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Senior Accountant (Global)",
    clearanceLevel: "INTERNAL",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-03-01",
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
    slug: "ABD0009",
    role: "Project Specialist",
    image: "https://i.ibb.co.com/x2b9z2q/20250110-165006-2.jpg",
    email: "ashek.hasan@aiavatar.work",
    phone: "+880 1616-344922",
    department: "Project Management",
    departmentCode: "PMP",
    positionLevel: "SPECIALIST",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Country Director",
    clearanceLevel: "INTERNAL",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-08-01",
    responsibilities: [
      "Project coordination",
      "Development process management",
      "Quality assurance",
      "Process improvement"
    ]
  },
  {
    id: 6,
    name: "ZAHIR UDDIN TIPU",
    slug: "ABD0010",
    role: "Lead Designer",
    image: "https://i.ibb.co.com/frcD5Zf/zahir.jpg",
    email: "zahir.uddin@aiavatar.work",
    phone: "+880 1827-122692",
    department: "Marketing",
    departmentCode: "MKT",
    positionLevel: "PROFESSIONAL",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Country Director",
    clearanceLevel: "INTERNAL",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-04-01",
    responsibilities: [
      "Creative direction",
      "Design team leadership",
      "Brand visual identity",
      "Quality control"
    ]
  },
  {
    id: 8,
    name: "Rawnak Jahan",
    slug: "ABD0012",
    role: "Growth Marketing Officer",
    image: "https://i.postimg.cc/856tvhPy/IMG-20250508-WA0007-1.jpg",
    email: "rawnak.jahan@aiavatar.work",
    phone: "+880 1739-324424",
    department: "Marketing",
    departmentCode: "MKT",
    positionLevel: "PROFESSIONAL",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Marketing Lead",
    clearanceLevel: "INTERNAL",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-05-01",
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
    slug: "ABD0013",
    role: "Video Editor & Visualizer",
    image: "https://i.postimg.cc/1XPDPhk6/Aftab-Ayub-Onick-1.jpg",
    email: "aftab.ayub@aiavatar.com.bd",
    phone: "+880 1634-305675",
    department: "Marketing",
    departmentCode: "MKT",
    positionLevel: "PROFESSIONAL",
    employmentStatus: "ACTIVE",
    employmentType: "FULL_TIME",
    reportsTo: "Marketing Lead",
    clearanceLevel: "INTERNAL",
    officeLocation: "Dhaka Headquarters",
    dateJoined: "2024-06-01",
    responsibilities: [
      "Generate Ai Videos",
      "Edit Videos",
      "Edit Ai Avatars",
      "Create Static & Motion Contents"
    ]
  }
];

// Helper functions for display formatting
export const formatEmploymentStatus = (status: Employee['employmentStatus']): string => {
  const statusMap = {
    'ACTIVE': 'ACTIVE EMPLOYMENT',
    'ON_LEAVE': 'ON AUTHORIZED LEAVE',
    'PROBATION': 'PROBATIONARY PERIOD',
    'TERMINATED': 'EMPLOYMENT TERMINATED'
  };
  return statusMap[status];
};

export const formatEmploymentType = (type: Employee['employmentType']): string => {
  const typeMap = {
    'FULL_TIME': 'FULL-TIME EMPLOYEE',
    'PART_TIME': 'PART-TIME EMPLOYEE',
    'CONTRACT': 'CONTRACT EMPLOYEE',
    'INTERN': 'INTERN'
  };
  return typeMap[type];
};

export const formatClearanceLevel = (level: Employee['clearanceLevel']): string => {
  const levelMap = {
    'EXECUTIVE': 'EXECUTIVE ACCESS',
    'INTERNAL': 'INTERNAL ACCESS',
    'RESTRICTED': 'RESTRICTED ACCESS',
    'PUBLIC': 'PUBLIC ACCESS'
  };
  return levelMap[level];
};

export const getStatusBadgeColor = (status: Employee['employmentStatus']): string => {
  const colorMap = {
    'ACTIVE': 'status-badge',
    'ON_LEAVE': 'status-badge-warning',
    'PROBATION': 'status-badge-info',
    'TERMINATED': 'status-badge-danger'
  };
  return colorMap[status];
};
