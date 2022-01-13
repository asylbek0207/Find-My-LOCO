import React from "react";
import PageLayout from "./PageLayout";

function NotFound() {
    return (
        <PageLayout title={'Упсс..'}>
            <div className="not-found">
                <p>404</p>
                <p>Not Found</p>
            </div>
        </PageLayout>
    );
}

export default NotFound;
