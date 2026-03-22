import { cn } from "@/lib/utils";

type EventDetailsProps = {
  className?: string;
};

export default function EventDetails({ className }: EventDetailsProps) {
  return (
    <div
      className={cn(
        "h-fit self-start border-l-[6px] border-cream pl-4 text-base font-[550] leading-relaxed md:pl-6 md:text-lg",
        className,
      )}
    >
      <p>theme: design and technology</p>
      <p className="mt-2">date: march 20th - march 22nd</p>
      <p className="mt-2">locations: center for design, isec</p>
    </div>
  );
}
