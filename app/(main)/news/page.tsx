import { NewsContent } from "./NewsContent";

export const metadata = {
  title: "News & Articles | NitNOT Clinic – Head Lice Tips & Advice",
  description:
    "Expert articles on head lice treatment, prevention, and advice from NitNOT Clinic. Stay informed with the latest tips for families and adults.",
  alternates: { canonical: "https://nitnot.com/news" },
};

export default function NewsPage() {
  return <NewsContent />;
}
