import React from "react"
import ContactRow from './ContactRow'
import PropTypes from 'prop-types'
import { Table, Container, Row, Col } from "react-bootstrap"
import "./index"
import "./index.css"

const IndexPage = (props) => {
  return (
    <>
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={{span: 10, offset: 1}}>
          <h1 className="text-center">Your Contacts</h1>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Phone #</th>
              </tr>
            </thead>
            <tbody>
              {
              props.contacts.map(contact => (
                <tr key={contact.id} className="text-center contact-table">
                  <ContactRow {...contact} />
                </tr>
              ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

IndexPage.propTypes = {
  name: PropTypes.string,

}

export default IndexPage