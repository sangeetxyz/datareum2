import {
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandRadixUi,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandValorant,
  TbBrandVercel,
} from "react-icons/tb";

export const rightItemsList: {
  path: string;
  description: string;
  id: number;
  text: string;
}[] = [
  {
    id: 1,
    text: "Passwordless authentication",
    description:
      "Our platform introduces a revolutionary password-less authentication system that leverages OTP (One-Time Password) technology. Say goodbye to the hassles of remembering complex passwords and the security risks they entail. With our system, users receive a unique OTP on their registered device, ensuring a highly secure login process.",
    path: "./features/passwordless.svg",
  },
  {
    id: 2,
    text: "CSV Processing Unit",
    description:
      "Discover our powerful CSV file processing system, designed to seamlessly parse and import data that perfectly aligns with your database schema. Say goodbye to manual data manipulation and let our system automate the data integration process for you, saving time and ensuring data accuracy.",
    path: "./features/csv.svg",
  },
  {
    id: 3,
    text: "Type Safe Database",
    description:
      "Experience the future of data management with our type-safe database solution. Eliminate the risk of data inconsistencies and errors by enforcing strict data typing and schema adherence, guaranteeing a reliable and robust database environment for your business needs.",
    path: "./features/db.svg",
  },
  {
    id: 4,
    text: "Blockchain Powered",
    description:
      "Revolutionize your data management with our Ethereum blockchain-powered system. Enjoy the benefits of transparency, security, and decentralized control as our platform harnesses the Ethereum network to empower your data-driven operations, ensuring trust and reliability at every step.",
    path: "./features/bitcoin.svg",
  },
  {
    id: 5,
    text: "RESTful API",
    description:
      "Access your data effortlessly through our user-friendly system, equipped with a RESTful API for seamless data retrieval. Our platform not only ensures the security of your information on the Ethereum blockchain but also provides a convenient and standardized way to access it, putting the power of your data in your hands.",
    path: "./features/api.svg",
  },
  {
    id: 6,
    text: "256-Bit Encryption",
    description:
      "Security is paramount in our system. Every single data row is fortified with robust 256-bit encryption, providing an impenetrable layer of protection for your sensitive information, guaranteeing the highest level of data security available.",
    path: "./features/encrypt.svg",
  },
];

export const brandList = [
  {
    id: 1,
    brand: "nextjs",
    icon: () => <TbBrandNextjs className="h-full w-full" color="#facc15" />,
    link: "https://nextjs.org/",
  },
  {
    id: 2,
    brand: "supabase",
    icon: () => <TbBrandSupabase className="h-full w-full" color="#facc15" />,
    link: "https://supabase.com/",
  },
  {
    id: 3,
    brand: "prisma",
    icon: () => <TbBrandPrisma className="h-full w-full" color="#facc15" />,
    link: "https://www.prisma.io/",
  },
  {
    id: 4,
    brand: "tailwind",
    icon: () => <TbBrandTailwind className="h-full w-full" color="#facc15" />,
    link: "https://tailwindcss.com/",
  },
  {
    id: 5,
    brand: "firebase",
    icon: () => <TbBrandFirebase className="h-full w-full" color="#facc15" />,
    link: "https://firebase.google.com/",
  },
  {
    id: 6,
    brand: "framer motion",
    icon: () => (
      <TbBrandFramerMotion className="h-full w-full" color="#facc15" />
    ),
    link: "https://www.framer.com/motion/",
  },
  {
    id: 7,
    brand: "vercel",
    icon: () => <TbBrandVercel className="h-full w-full" color="#facc15" />,
    link: "https://vercel.com/",
  },
  {
    id: 8,
    brand: "react",
    icon: () => <TbBrandReact className="h-full w-full" color="#facc15" />,
    link: "",
  },
  {
    id: 9,
    brand: "threejs",
    icon: () => <TbBrandThreejs className="h-full w-full" color="#facc15" />,
    link: "https://threejs.org/",
  },
  {
    id: 10,
    brand: "figma",
    icon: () => <TbBrandFigma className="h-full w-full" color="#facc15" />,
    link: "https://www.figma.com/",
  },
  {
    id: 11,
    brand: "radixui",
    icon: () => <TbBrandRadixUi className="h-full w-full" color="#facc15" />,
    link: "https://www.radix-ui.com/",
  },
  {
    id: 12,
    brand: "valorant",
    icon: () => <TbBrandValorant className="h-full w-full" color="#facc15" />,
    link: "https://playvalorant.com/en-gb/",
  },
];

