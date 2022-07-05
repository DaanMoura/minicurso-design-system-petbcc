import styled from 'styled-components'
import colors from '../../theme/colors'

const StyledButton = styled.button`
    background: ${colors.primary};
    box-shadow: 2px 2px 0px 2px ${colors.primaryVariation};
    border-radius: 8px;
    padding: 8px 16px;
    transition: .2s;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${ colors.negativeText };

    &:hover {
        box-shadow: 3px 3px 0px 3px ${colors.primaryVariation};
        transform: translate(-2px, -2px);
    }

    &:active {
        box-shadow: 0px 0px 0px 0px ${colors.primaryVariation};
        background: ${colors.primaryVariation};
        transform: translate(3px, 3px);
    }

    &:disabled {
        box-shadow: 0px 0px 0px 0px ${colors.primaryVariation};
        transform: translate(0, 0) ;
        background: ${colors.backgroundVariation};
        color: ${colors.text};
    }
`

export default StyledButton