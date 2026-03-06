export type Eventitem = {
  id: string;
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description?: string;
}

export const events: Eventitem[] = [
  {
    id: "1",
    title: "React Conf 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Austin, Texas",
    date: "March 22-23, 2026",
    time: "9:00 AM - 6:00 PM",
    description:
      "Annual React conference featuring talks from core team members and community leaders.",
  },
  {
    id: "2",
    title: "Next.js Summit 2026",
    image: "/images/event2.png",
    slug: "nextjs-summit-2026",
    location: "San Francisco, California",
    date: "April 15-16, 2026",
    time: "8:30 AM - 5:00 PM",
    description:
      "Discover the latest Next.js features and best practices with expert developers.",
  },
  {
    id: "3",
    title: "Web Dev Days Europe",
    image: "/images/event3.png",
    slug: "web-dev-days-europe",
    location: "Amsterdam, Netherlands",
    date: "May 5-6, 2026",
    time: "9:00 AM - 5:30 PM",
    description:
      "Multi-track conference covering frontend, backend, and full-stack development.",
  },
  {
    id: "4",
    title: "TypeScript Congress 2026",
    image: "/images/event4.png",
    slug: "typescript-congress-2026",
    location: "Berlin, Germany",
    date: "May 28-29, 2026",
    time: "10:00 AM - 6:00 PM",
    description:
      "Deep dive into TypeScript with talks on advanced patterns and type system mastery.",
  },
  {
    id: "5",
    title: "Node.js Interactive 2026",
    image: "/images/event5.png",
    slug: "nodejs-interactive-2026",
    location: "Denver, Colorado",
    date: "June 10-11, 2026",
    time: "8:00 AM - 5:00 PM",
    description:
      "Explore Node.js ecosystem with sessions on performance, security, and scalability.",
  },
  {
    id: "6",
    title: "JavaScript Global Summit",
    image: "/images/event6.png",
    slug: "js-global-summit",
    location: "Toronto, Canada",
    date: "July 18-19, 2026",
    time: "9:00 AM - 5:30 PM",
    description:
      "Comprehensive JavaScript conference covering modern frameworks and tooling.",
  },
];
