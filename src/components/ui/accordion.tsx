"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-serif text-lg font-medium text-grey-darker hover:text-green-normal transition-colors"
        onClick={onClick}
      >
        {title}
        <ChevronDown
          className={cn(
            "h-5 w-5 text-grey-normal transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-grey-normal text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items = [] }: { items: { id: string; question: string; answer: string }[] }) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onClick={() => setOpenId(openId === item.id ? null : item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
