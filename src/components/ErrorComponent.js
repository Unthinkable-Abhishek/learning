import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Sorry, You are requesting for wrong Page</h1>
            <h5>Status Code: {err?.status}</h5>
        </div>
    )
}

export default ErrorComponent;