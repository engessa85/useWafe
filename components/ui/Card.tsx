import { cn } from "@/lib/utils";

export function Card({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "bg-white rounded-[28px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 border border-black/[0.03]",
                className
            )}
        >
            {children}
        </div>
    );
}
