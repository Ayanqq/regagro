import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-w-[1320px] mx-auto h-full ${className ?? ""}`}>
            {children}
        </div>
    );
}
