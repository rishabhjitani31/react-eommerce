import styled from 'styled-components'

export const StyledComment = styled.div`
  max-width: 394px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${props => props.theme.palette.secondary.light};
  .comment-description,
  .comment-title {
    margin: 0;
  }
  .comment-title {
    ${props => props.theme.typography.subtitle2};
  }
  .commentor-name,
  .comment-date {
    ${props => props.theme.typography.overline};
    line-height: initial;
    color: ${props => props.theme.palette.secondary.dark};
  }
  .comment-description {
    ${props => props.theme.typography.body2};
    padding: 16px 0 24px 0;
  }
`
