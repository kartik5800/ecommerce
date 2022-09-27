import React from 'react';
import { Link } from 'react-router-dom';

function A404(props) {
    return (
        <div>
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn"><i className="fas fa-window-close" /></span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">Search <i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end search arewa */}
  {/* breadcrumb-section */}
  <div className="breadcrumb-section breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="breadcrumb-text">
            <p>Fresh adn Organic</p>
            <h1>404 - Not Found</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end breadcrumb section */}
  {/* error section */}
  <div className="full-height-section error-section">
    <div className="full-height-tablecell">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="error-text">
              <i className="far fa-sad-cry" />
              <h1>Oops! Not Found.</h1>
              <p>The page you requested for is not found.</p>
              <Link to={"/"} className="boxed-btn">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}


export default A404;