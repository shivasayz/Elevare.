import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionDivider } from "./SectionDivider";

const faqs = [
  {
    question: "How often are job listings updated?",
    answer:
      "Our job listings are updated in real-time as soon as companies post new positions. We scan hundreds of sources daily to ensure you never miss an opportunity.",
  },
  {
    question: "Is the platform free to use?",
    answer:
      "Yes! Basic access to job listings, news, and releases is completely free. We offer premium features for advanced filtering and instant notifications.",
  },
  {
    question: "Can I save jobs and articles for later?",
    answer:
      "Absolutely! Create a free account to save jobs, bookmark articles, and track software releases that interest you.",
  },
  {
    question: "How do you verify job postings?",
    answer:
      "We partner directly with companies and use advanced verification systems to ensure all job postings are legitimate and up-to-date.",
  },
  {
    question: "Can I get notifications for specific technologies?",
    answer:
      "Yes! Set up custom alerts for specific programming languages, frameworks, or job titles to get notified instantly when matching opportunities arise.",
  },
  {
    question: "Do you offer career guidance?",
    answer:
      "We provide industry insights, salary trends, and interview tips through our news section. Premium members get access to exclusive career coaching content.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-32 px-8 bg-secondary/5">
      <div className="max-w-[84rem] mx-auto">
        {/* Divider with Join Us */}
        <SectionDivider label="Frequently Asked Questions" />

        {/* FAQ Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            You Wondered. We Answered.
          </h2>

          <p className="text-xl text-muted-foreground">
            Don’t worry, we’ve heard it all. Yes, even that one.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-secondary/20"
              >
                <AccordionTrigger className="text-primary hover:text-accent text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
