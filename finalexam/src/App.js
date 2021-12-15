import classes from './Main.module.css';
import {Form, Button, InputGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={classes.App}>

        {/* Blue sign in header */}
    <div className={classes.Banner}>
      <span>Sign In to Earn Rewards</span>
      <p>Log in to your Amtrak Guest Rewards account or continue as a guest</p>
    </div>

    {/* 1 Traveler section */}
    <div className={classes.Traveler}>
    <h2>1 Traveler</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Middle Initial</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Last Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />

    <Form.Label>Country Code</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Mobile Phone Number</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

</Form>
</div>

{/* Share Your Travel Plans */}
<Form className={classes.Share}>
    Add up to three email addres to receive your travel details. Payment and billing ifnromation will not be shared.
    <Form.Control type="email" placeholder="name@example.com" />
    <Form.Label htmlFor="basic-url">Send eTicket</Form.Label>
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <Form.Label htmlFor="basic-url">Send Itinerary</Form.Label>
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
</Form>
{/* Back/Continue */}
<div>
<Button variant="outline-primary">Back</Button> 
<Button variant="success">Continue</Button> 
</div>

{/* Payment */}
<div className={classes.Payment}>
<h2>Payment</h2>
<strong>Online Offer: Up to $893274398574354 in total value - a $30928459438o5 statement credit + no bonus poiints (something in paren)</strong>
<p>lots of small text lots of small text lots of small text lots of small text lots of small text lots of small text lots of small text lots of small text</p>
</div>

<div>
  <h2>Trip Summary</h2>
  <span>LAX to NYP</span>
</div>



<div>
  <h2>Payment Summary</h2>
  <hr/>
<span>fare: $1645</span>
<hr/>
<span>Add-Ons: $40</span>
<hr/>
<h2>Balance Due</h2>
<span>$1685</span>
</div>





</div>



  );
}

export default App;
