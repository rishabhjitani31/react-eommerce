import Portal from 'react-minimalist-portal'
import PropTypes from 'prop-types'
import { StyledSpinnerContainer, StyledSpinner } from './styles'

export default Spinner

Spinner.propTypes = {
  variant: PropTypes.oneOf(['normal', 'fullScreen', 'block', 'fill']),
  color: PropTypes.oneOf(['grey', 'primary', 'secondary', 'success', 'error'])
}
Spinner.defaultProps = {
  variant: 'normal',
  color: 'grey'
}

function Spinner (props) {
  return props.variant === 'fullScreen' ? (
    <Portal>{renderSpinner(props)}</Portal>
  ) : (
    renderSpinner(props)
  )
}
function renderSpinner (props) {
  const { spinnerProps, ...rest } = props
  return (
    <StyledSpinnerContainer data-variant={props.variant} {...rest}>
      <StyledSpinner color={props.color} {...spinnerProps} />
    </StyledSpinnerContainer>
  )
}
