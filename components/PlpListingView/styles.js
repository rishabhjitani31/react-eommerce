import styled from 'styled-components'
import GridView from '~/static/images/gridview.svg'

export const PlpListingStyle = styled.div`
  .sorting-header {
    padding: 0 12px;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      display: none;
    }
    .sorting-header-container {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.palette.border.main};
      padding: 0 4px;
      .title {
        ${props => props.theme.typography.overline};
        color: ${props => props.theme.palette.secondary.dark};
        margin-right: 6px;
        text-transform: uppercase;
      }
      .sorting-method {
        ${props => props.theme.typography.caption};
        color: ${props => props.theme.palette.secondary.dark};
        padding: 12px 8px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.3s ease;
        margin-right: 14px;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: block;
          margin: 0 auto;
          background: ${props => props.theme.palette.common.white};
          width: 0;
          transition: all 0.3s ease;
          height: 1px;
        }
        &:hover {
          color: ${props => props.theme.palette.common.white};
          &:after {
            width: 100%;
          }
        }
        &.active {
          color: ${props => props.theme.palette.common.white};
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
  .psl-listing {
    display: flex;
    flex-wrap: wrap;
    padding: 12px 8px;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    .denim-single {
      margin: 0 4px;
      width: calc(25% - 8px);
      margin-bottom: 24px;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        width: calc(50% - 8px);
      }
      .img_slider {
        padding: 0;
        max-width: 100%;
        .box_industries {
          .img-src {
            width: 100%;
          }
        }
      }
    }
  }
  .mobileview-filter-block {
    background: #fff;
    border-top: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 13px 20px;
    .filter-text {
      color: rgba(0, 0, 0, 0.87);
      font-size: 14px;
      line-height: 18px;
      cursor: pointer;
      font-weight: 600;
      flex: 0 0 42%;
      text-align: center;
      display: none;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        display: block;
      }
    }
    .gridview-icon {
      flex: 0 0 24px;
      text-align: center;
      height: 24px;
      width: 24px;
      display: none;
      background: url(${GridView}) no-repeat 0 0;
      background-size: 20px;
      &.listview-icon {
        background: url(${GridView}) no-repeat 0 0;
        background-size: 20px;
      }
      @media ${props => props.theme.breakpoints.mobileLarge} {
        display: block;
      }
    }

    .sort-text {
      color: rgba(0, 0, 0, 0.87);
      font-size: 14px;
      line-height: 18px;
      cursor: pointer;
      display: none;
      font-weight: 600;
      flex: 0 0 42%;
      text-align: center;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        display: block;
      }
    }
  }
`
