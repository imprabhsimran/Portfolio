import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  console.log({ title, description, imgUrl, websiteUrl }); // Debugging
  return (
    <Col >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* Button to go to website */}
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <button className="visit-btn">Visit Website</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

