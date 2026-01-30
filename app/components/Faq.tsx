import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What makes you lose track of time (in a good way)?",
    answer:
      "Learning about a new topic or rewriting docs. I love making complex topics easy to understand, and getting people aligned.",
  },
  {
    question: 'Where do you feel most like a kid again?',
    answer:
      'Playing video games with my friends, playing soccer with my kids, or swimming in a lake. It brings back a sense of wonder and freedom that I love.',
  },
  {
    question: 'What do you happily go way too deep on?',
    answer:
      'Finding the best way to automate boring tasks I find myself doing every day. I love researching and experimenting with different tools to create better solutions, even if it means saving a single second of time.',
  },
  {
    question: 'What is something small the reliably makes your day better?',
    answer:
      "A walk alone some great music, a phone call with someone I love, or a podcast. It's a chance to clear my mind and feel like I exist outside of work.",
  },
  {
    question: "What kind of environment brings out your best work?",
    answer:
      'A small team witih clear goals, full ownership, and deep accountability.',
  },
  {
    question: 'What do you do besides design?',
    answer:
      "Cook, write, build games and silly little tools, watch great movies, exercise, and explore new technologies.",
  },
]

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto xl:mx-0 max-w-7xl py-8">
        <div className="mx-auto">
          <dl className="divide-y divide-slate-900/10 dark:divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-900 dark:text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
