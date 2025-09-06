import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {

    return (
        <div className={`max-w-[920px] lg:max-w-[1320px] 2xl:h-[777px] min-h-[90vh] md:min-h-[595px] mx-auto px-4 md:px-8 relative z-10 ${className ?? ""}`}>
            {children}
        </div>
    );
}
