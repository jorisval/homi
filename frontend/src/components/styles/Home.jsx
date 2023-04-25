import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
.hero {
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    @media (min-width: ${theme.breakpoints.up.large}) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
        padding-right: ${theme.layout.spaceBetween60};
        padding-bottom: ${theme.layout.spaceBetween90};
    }
    &__text {
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.large}) {
            padding-top: 8.75rem;
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 40%;
            max-width: 33rem;
            text-align: unset;
            border-radius: 0;
        }
        h1 {
            color: ${theme.colors.white};
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            font-weight: 200;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                text-align: left;
            }
        }
        .cta-row {
            display: flex;
            justify-content: center;
            @media (min-width: ${theme.breakpoints.up.large}) {
                justify-content: left;
            }
            .cta-button {
                margin-right: 0.9375rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.transparent};
                border: 2px solid ${theme.colors.white};
                font-weight: 300;
                &.view {
                    color: ${theme.colors.button};
                    background-color: ${theme.colors.secondary};
                    border: 2px solid ${theme.colors.secondary};
                }
                :hover {
                    color: ${theme.colors.white};
                    background-color: ${theme.colors.button};
                    border: 2px solid ${theme.colors.button};
                }
            }
        }

    }
    &__image {
        margin: auto;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 60%;
        }
        @media (min-width: ${theme.breakpoints.up.large}) {
            max-width: 50%;
            padding-top: 8.75rem;
            margin: none;
        }
        img {
            width: 100%;
        }
    }

}
.benefice-team {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.benefice-mb {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.benefice-sav {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.result {
    margin: 0 10%;
    margin-top: ${theme.layout.spaceBetween60};
    text-align: center;
    &__elements {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            max-width: 9.375rem;
            height: fit-content;
            border-radius: 0.625rem;
            margin: auto;
            margin-top: 0;
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                max-width: 13rem;
            }
        }
    }
}
.why {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    text-align: center;
    &__elements {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__element {
        width: 12.5rem;
        padding: 1.375rem;
        padding-top: 0;
        text-align: center;
        margin: auto;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 20rem;
        }
        img {
            width: 4.625rem;
            margin-bottom: 0.625rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
`;