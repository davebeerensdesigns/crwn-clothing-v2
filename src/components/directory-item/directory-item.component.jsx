import {BackgroundImage, Body, DirectoryItemContainer, Heading2, Paragraph} from "./directory-item.styles";

const DirectoryItemComponent = ({category}) => {
    const {imageUrl, title} = category
    return (
        <DirectoryItemContainer>
            <BackgroundImage
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}/>
            <Body>
                <Heading2>{title}</Heading2>
                <Paragraph>Shop Now</Paragraph>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItemComponent