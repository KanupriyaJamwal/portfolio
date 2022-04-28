import { Component } from "react";
//import { withRouter } from "react-router-dom";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    //if (window.location.pathname !== prevProps.location.pathname) {
    window.scrollTo(0, 0);
    //}
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
