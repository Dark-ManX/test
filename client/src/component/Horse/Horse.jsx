import { Item, Text, SpanText } from "./Horse.styled";

const Horse = ({name, distance}) => {
    
    return (

        <>
            <Item>
                
                <Text>Name: <SpanText>{name}</SpanText></Text> 
                <Text>Distance: <SpanText>{distance}</SpanText></Text>
            </Item>
        </>
    )
}

export default Horse;