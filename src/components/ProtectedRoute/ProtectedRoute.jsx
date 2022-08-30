import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ ...props }) => {
  return (
    <Route {...props}>
      {() => (props.isLoggedIn ? props.children : <Redirect to='/' />)}
    </Route>
  );
};

export default ProtectedRoute;
