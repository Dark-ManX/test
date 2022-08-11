import styled from "@emotion/styled";

export const Item = styled.li`
display: block;
margin-bottom: 5px;
font-size: 20px;
font-weight: 700;

    &:nth-of-type(odd) {
        background-color: lightgreen;
    }
`

export const Text = styled.p`
display: inline-block;

    &:not(:last-child){
        margin-right: 50px;
    }
`

export const SpanText = styled.span`
color: darkblue;
`
