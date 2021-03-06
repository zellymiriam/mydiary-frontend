import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import {Link} from "react-router-dom";

const Home = props => {
  const entries = props.entries.map(entry => (
    <div className="view-entries" key={entry.Entry_id}>
      <Card>
        <CardBody>
          <CardTitle>{entry.title}</CardTitle>
          <CardSubtitle>{entry.date}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{entry.content}</CardText>
          <CardLink
            href="#"
            onClick={() => props.handleClick(entry.Entry_id)}
            className="info-text"
          >
            view
          </CardLink>
        </CardBody>
      </Card>
    </div>
  ));
  if (props.entries.length == 0 || props.msg.message=== "there are no entries please add an entry") {
    return (
      <div style={{ display: props.display }}>
        <Card id="welcome-card">
          <CardBody>
            <Card>
              <CardBody>
                <CardTitle>Welcome to My diary</CardTitle>
              </CardBody>
              <CardBody>
                <CardText>
                  Please click{" "}
                  <Link to="/create" className="info-text">
                    here
                  </Link>{" "}
                  to add an entry.
                </CardText>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    );
  }
  return (
   
    <div>
      {entries}
    </div>
  );
};
Home.propTypes = {
  entries: PropTypes.array,
  handleClick: PropTypes.func,
  display: PropTypes.string,
  msg:PropTypes.string
};
export default Home;
