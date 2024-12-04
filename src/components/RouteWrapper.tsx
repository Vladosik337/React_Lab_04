import React, { ReactNode, useEffect, useState } from "react";

interface RouteWrapperProps {
    loader?: () => Promise<any>;
    children: ReactNode;
}

export const RouteWrapper: React.FC<RouteWrapperProps> = ({ loader, children }) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loader) {
            loader()
                .then((result) => {
                    setData(result);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error loading data:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [loader]);

    if (loading) {
        return <div>Loading data...</div>;
    }

    return <>{children}</>;
};
