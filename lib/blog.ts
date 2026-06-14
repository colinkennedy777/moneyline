export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-time-buyer-checklist",
    title: "The Complete First-Time Homebuyer Checklist for 2026",
    excerpt:
      "Everything you need to prepare before you start house hunting, from credit prep to down payment savings strategies.",
    category: "First-Time Buyers",
    date: "June 2, 2026",
    readTime: "7 min read",
  },
  {
    slug: "when-to-refinance",
    title: "Is Now the Right Time to Refinance Your Mortgage?",
    excerpt:
      "Five signals that indicate refinancing could save you money, plus the break-even math you need to know.",
    category: "Refinance",
    date: "May 21, 2026",
    readTime: "5 min read",
  },
  {
    slug: "understanding-mortgage-rates",
    title: "How Mortgage Rates Are Set (And What You Can Control)",
    excerpt:
      "Demystifying the factors behind your interest rate and the levers you can pull to lock in a better one.",
    category: "Education",
    date: "May 9, 2026",
    readTime: "6 min read",
  },
  {
    slug: "conventional-vs-fha",
    title: "Conventional vs. FHA: Which Loan Is Right for You?",
    excerpt:
      "A side-by-side comparison of two of the most popular loan programs to help you choose with confidence.",
    category: "Loan Programs",
    date: "April 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "va-loan-benefits",
    title: "VA Loans: The Underused Benefit Every Veteran Should Know",
    excerpt:
      "Zero down, no PMI, and competitive rates. Here's how eligible service members can make the most of it.",
    category: "Loan Programs",
    date: "April 14, 2026",
    readTime: "6 min read",
  },
  {
    slug: "closing-costs-explained",
    title: "Closing Costs Explained: What You're Actually Paying For",
    excerpt:
      "A transparent breakdown of every line item so there are no surprises at the closing table.",
    category: "Education",
    date: "April 1, 2026",
    readTime: "5 min read",
  },
];
