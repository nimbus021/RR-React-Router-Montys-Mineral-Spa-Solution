import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { Card } from 'react-bootstrap'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) =>
     <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                </Card.Body>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    )
}