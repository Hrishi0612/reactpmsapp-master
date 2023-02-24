// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label, Modal } from 'reactstrap'

const Reflect = () => {
  <Modal>
    <Card>
    </Card>
  </Modal>

}

const ReservationDetails = () => (
  <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Create Reservation</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Arrival Date
              </Label>
              <Input type='date' name='hotelid' id='nameMulti' placeholder='Select arrival Date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Departure Date
              </Label>
              <Input type='date' name='sourcegroup' id='lastNameMulti' placeholder='Select departure date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Nights
              </Label>
              <Input type='text' name='description' id='cityMulti' placeholder='Enter number of nights' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Adults
              </Label>
              <Input type='text' name='activestatus' id='CountryMulti' placeholder='Enter number of Adults' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Children
              </Label>
              <Input type='text' name='activestatus' id='CountryMulti' placeholder='Enter number of children' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                No of Rooms
              </Label>
              <Input type='text' name='activestatus' id='CountryMulti' placeholder='Enter number of rooms' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Company
              </Label>
              <Input type='select' name='activestatus' id='CountryMulti' placeholder='Select Company name'>
                <option value="">---select---</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Room Type
              </Label>
              <Input type='select' name='activestatus' id='CountryMulti' placeholder='select room type'>
                <option value="">---select---</option>
                <option value="exe">EXE</option>
                <option value="kclb">KCLB</option>
                <option value="kdlx">KDLX</option>
                <option value="ksup">KSUP</option>
                <option value="tclb">TCLB</option>
                <option value="tdlx">TDLX</option>
                <option value="tsup">TSUP</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Agent
              </Label>
              <Input type='select' name='activestatus' id='CountryMulti' placeholder='select Agent'>
                <option value="">---select---</option>
                <option value="goibibo">GoIbibo</option>
                <option value="booking">Booking.com</option>
              </Input>
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  GO
                </Button>
                <Button className='me-1' color='success' type='submit' onClick={Reflect()}>
                  Check Availablity
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  </div>
)

export default ReservationDetails

