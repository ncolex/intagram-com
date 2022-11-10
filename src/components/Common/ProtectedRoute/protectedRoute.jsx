import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, email }) => {
    if (!email) {
        return <Navigate to={`/`} />
    }
    return children;
}

export default ProtectedRoute;