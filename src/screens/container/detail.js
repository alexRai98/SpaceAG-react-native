import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {ScrollView}from 'react-native'
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Detail = () => (
  <ScrollView>
    <Card>
      <Card.Title
        title="Ubicación"
        subtitle=""
      />
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Content>
        <Title>Imagen de muestra</Title>
        <Paragraph>Muestra 1 de lo que sea .com</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </ScrollView>
);

export default Detail;
