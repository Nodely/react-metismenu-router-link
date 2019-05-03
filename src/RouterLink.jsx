/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

import React  from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

class RouterLink extends React.Component {
  componentWillMount() {
    this.to = this.props.to;
    if (this.to[0] !== '/') this.to = `/${this.to}`;

    history.listen(this.onLocationChange.bind(this));
    this.onLocationChange(this.props.router.route);
  }
  onLocationChange(e) {
    if ((e.pathname || '/') === this.to) {
      this.props.activateMe();
    }
  }
  render() {
    const {
      className,
      classNameActive,
      classNameHasActiveChild,
      active,
      hasActiveChild,
      to,
      externalLink,
      hasSubMenu,
      toggleSubMenu,
      children,
    } = this.props;

    return (
      hasSubMenu || externalLink
      ? (
        <a
          className={classnames(
            className,
            hasActiveChild && classNameHasActiveChild
          )}
          target={externalLink ? '_blank' : undefined}
          href={to}
          onClick={toggleSubMenu}
        >
          {children}
        </a>
      )
      : (
        <Link
          className={classnames(
            className,
            active && classNameActive
          )}
          to={to}
        >
          {children}
        </Link>
      )
    );
  }
}

RouterLink.propTypes = {
  className: PropTypes.string.isRequired,
  classNameActive: PropTypes.string.isRequired,
  classNameHasActiveChild: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default withRouter(RouterLink);
