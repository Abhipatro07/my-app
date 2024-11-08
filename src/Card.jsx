import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className="main">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    
  );
}

export default BasicExample;