import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide services across India?",
      answer:
        "Yes, we undertake projects across India with dedicated project management and installation teams.",
    },
    {
      question: "What types of projects do you undertake?",
      answer:
        "We work on commercial, industrial, institutional and residential projects of all scales.",
    },
    {
      question: "Do you offer custom fabrication solutions?",
      answer:
        "Yes, all aluminium, glazing and structural systems can be customized according to project requirements.",
    },
    {
      question: "What materials do you use?",
      answer:
        "We use premium-grade ACP, toughened glass, aluminium profiles, UPVC systems and certified structural materials.",
    },
    {
      question: "How can I request a quotation?",
      answer:
        "You can contact us through the inquiry form, phone or email for a detailed project consultation.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope, scale and site conditions. A detailed schedule is provided before execution.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                border
                border-slate-200
                rounded-2xl
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-6
                  text-left
                  font-semibold
                "
              >
                {faq.question}

                <FaChevronDown
                  className={`
                    transition-transform
                    ${
                      active === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}