import styled from 'styled-components'

export const Header = styled.header`
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 12px 18px 15px;
    width: 100%;
    position: relative;
    .left-part {
      display: flex;
      align-items: center;
      .country-select {
        margin-right: 30px;
        display: flex;
        align-items: center;
        .flag-us {
          margin-right: 12px;
        }

        @media ${props => props.theme.breakpoints.mobileLarge} {
          display: none;
        }
      }
      .search-box {
        position: relative;
        display: flex;
        align-items: center;
        .Shape {
          margin-right: 4px;
        }
        .search-text {
          ${props => props.theme.typography.body2};
          color: ${props => props.theme.palette.primary.main};
          border: 0;
          outline: none;
          margin-left: 8px;

          @media ${props => props.theme.breakpoints.mobileLarge} {
            display: none;
          }
        }
      }
    }
    .logo-part {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      a {
        display: block;
        img {
          display: block;
          max-width: 100%;
        }
      }
    }
    .right-part {
      display: flex;
      align-items: center;
      .btn-login {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.main};
        text-decoration: none;

        @media ${props => props.theme.breakpoints.mobileLarge} {
          display: none;
        }
      }
      .hc-button {
        margin-left: 24px;
        img {
          display: block;
        }
      }
    }
  }
  .sub-header {
    display: block;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    .main-navigation-ul {
      display: flex;
      width: 100%;
      margin: 0;
      padding: 0;
      justify-content: center;
      position: relative;
      .main-navigation-list {
        list-style: none;
        ${props => props.theme.typography.caption};
        margin: 0 4px;
        .main-navigation-link {
          color: ${props => props.theme.palette.secondary.light};
          padding: 12px 13px;
          position: relative;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
          &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            background: ${props => props.theme.palette.common.white};
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            transition: all 0.3s ease;
          }
        }
        &:hover {
          .main-navigation-link {
            color: ${props => props.theme.palette.primary.main};
            &:after {
              width: 100%;
            }
          }
          .sub-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
        }
        .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding: 16px;
          padding-bottom: 0;
          display: flex;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px 0
            ${props => props.theme.palette.secondary.light};
          background: #fff;
          z-index: 1;
          .sub-menu-content {
            flex: 1;
            padding-right: 50px;
            display: flex;
            flex-wrap: wrap;
            .sub-menu-single-blk {
              max-width: 25%;
              width: 100%;
              padding-right: 30px;
              margin-bottom: 20px;
              .single-blk-title {
                ${props => props.theme.typography.body2};
                color: ${props => props.theme.palette.primary.main};
                font-weight: 700;
                display: block;
                margin-bottom: 8px;
              }
              .single-blk_ul {
                padding: 0;
                margin: 0;
                .single-blk_list {
                  list-style: none;
                  display: block;
                  padding-bottom: 4px;
                  .single-blk_link {
                    ${props => props.theme.typography.body2};
                    text-decoration: none;
                    transition: all 0.3s ease;
                    color: rgba(0, 0, 0, 0.4);
                    &:hover {
                      color: #48bcab;
                    }
                  }
                }
              }
            }
          }
          .sub-menu-img {
            max-width: 180px;
            width: 100%;
            padding: 32px 0;
            .sub-menu-image {
              display: block;
            }
          }
        }
      }
    }

    @media ${props => props.theme.breakpoints.mobileLarge} {
      display: none;
    }
  }

  /*-----*/
  .mobile-menu {
    position: relative;
    transition: left 1s ease-in-out;
    display: none;

    @media ${props => props.theme.breakpoints.mobileLarge} {
      display: block;
      padding: 0px 20px 0px 0px;

      .menu-icon {
        cursor: pointer;
      }
    }

    .mobile-menu-wrapper {
      width: 260px;
      margin: 0 auto 0 auto;
      height: 100vh;
      position: absolute;
      top: -20px;
      left: -15px;
      z-index: 2;
      transition: left 0.3s ease-in-out;

      &.deactive {
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        left: -275px;

        .menu-overlay {
          transition: all 0.3s ease-in-out;
          width: 100vw;
          opacity: 0;
        }
      }

      .mobile-menu-wrapper-Inner {
        position: relative;
        z-index: 100;
        background: ${props => props.theme.palette.common.white};
        min-height: 100vh;
      }

      .menu-overlay {
        background: ${props => props.theme.palette.primary.main};
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100%;
        z-index: 0;
        transition: all 0.3s ease-in-out;
        opacity: 0.8;
        pointer-events: none;
      }
    }

    .mobile-header-toppart {
      display: flex;
      justify-content: space-between;
      padding: 17px 13px;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.palette.secondary.light};
      background-color: ${props => props.theme.palette.common.white};

      .cross-icon {
        cursor: pointer;
      }
    }

    .signup-text {
      color: ${props => props.theme.palette.primary.main};
      font-size: '1rem';
      line-height: '1.142rem';
      letter-sapcing: '1px';
      opacity: 1;
      font-weight: 'lighter';
      color: '#333333';
    }
    .menu-part-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      .menu-item {
        display: flex;
        justify-content: space-between;
        flex: 1 1 auto;
        padding: 0 24px;
        align-items: center;
        margin-bottom: 24px;
        text-decoration: none;

        &:first-child {
          margin-top: 24px;
        }
      }
    }
    .item-text {
      font-size: 1.2rem;
      font-weight: normal;
      color: ${props => props.theme.palette.secondary.light};
    }
    .item-text.active {
      color: ${props => props.theme.palette.secondary.light};
    }
    .mobile-bottom {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      background-color: ${props => props.theme.palette.secondary.light};

      .menu-part-container {
        background: ${props => props.theme.palette.common.white};
        .menu-item {
          margin-bottom: 10px;

          &:first-child {
            margin-top: 10px;
          }
        }
      }
    }
  }
`
