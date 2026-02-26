interface childrenProps {
    children: React.ReactNode
}

export function Container({children} : childrenProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            {children}
        </div>
    )
}