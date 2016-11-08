import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router'

const Footer = props => {
  return (
    <div className="cmb-bottom-footer">
		  <footer id="cmb-footer">
		    <div className="container">
		      <div className="row">
		        <div id="cmb-footer1" className="col-sm-6 col-md-6">
		          <div className="cmb-column ">
		            <div className="cmb-module ">
		              <div className="cmb-module-content">
		                <ul className="nav menu">
		                  <li><Link className="see-more-link pull-right" to={{pathname: "/about"}}>About</Link></li>
		                  <li><Link className="see-more-link pull-right" to={{pathname: "/privacy"}}>Privacy</Link></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div id="cmb-footer2" className="col-sm-6 col-md-6">
		          <div className="cmb-column "><span className="cmb-copyright"> Copyright 2016 © Class Bargains. All Rights Reserved by <a className="footer-link" target="_blank" href="http://newomatic.com">Newomatic Corp.</a></span></div>
		        </div>
		      </div>
		    </div>
		  </footer>
		</div>
  )
}

Footer.displayName = "Footer";

module.exports = Footer;