import React from 'react'
import PropTypes from 'prop-types'
import { ProgressSpinner } from '@jsluna/react'

const LoadingIndicator = ({ children, className }) => (
  <div className={className}>
    <ProgressSpinner />
    {children}
  </div>
)

LoadingIndicator.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

LoadingIndicator.defaultProps = {
  children: undefined,
  className: undefined,
}

export default LoadingIndicator
