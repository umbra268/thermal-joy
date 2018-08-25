import React, { Component, Fragment } from 'react';
import Fetch from 'react-fetch';
import { Map, TileLayer } from 'react-leaflet';

const User = props => {
  if(props.results) {
    return <Fragment>
      <img className="user-avatar rounded-circle mr-2" src={props.results[0].picture.thumbnail} alt="User Avatar" />
      <span className="d-none d-md-inline-block" style={{ textTransform: 'capitalize'}}>{props.results[0].name.first} {props.results[0].name.last}</span>
    </Fragment>;
  } else return null;
}

class FragmentFetch extends Fetch {
  render() {
    return (
      <Fragment>
      {this.children()}
      </Fragment>
    )
  }
}

//  TODO: slide out navbar
class App extends Component {
  render() {
    return (
      <div className='main-content'>
        <div className='main-navbar sticky-top bg-white'>
          <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
            <ul className="ml-auto navbar-nav border-left flex-row ">
              <li className="nav-item border-right dropdown notifications">
                <a className="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="nav-link-icon__wrapper">
                    <i className="material-icons"></i>
                    <span className="badge badge-pill badge-danger">2</span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    <div className="notification__icon-wrapper">
                      <div className="notification__icon">
                        <i className="material-icons"></i>
                      </div>
                    </div>
                    <div className="notification__content">
                      <span className="notification__category">Sales</span>
                      <p>Last week your store’s sales count decreased by
                        <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                    </div>
                  </a>
                  <a className="dropdown-item notification__all text-center" href="#"> View all Notifications </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <FragmentFetch url="https://randomuser.me/api/?lego">
                    <User />
                  </FragmentFetch>
                </a>
                <div className="dropdown-menu dropdown-menu-small">
                  <a className="dropdown-item" href="user-profile-lite.html">
                  <i className="material-icons"></i> Profile</a>
                </div>
              </li>
            </ul>
            <nav className="nav">
              <a href="#" className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                <i className="material-icons"></i>
              </a>
            </nav>
          </nav>
        </div>
        <div className="main-content-container container-fluid">
          <div className="page-header row no-gutters py-4">
            <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
              <span className="text-uppercase page-subtitle">______________ School</span>
              <h3 className="page-title">Map View</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                  Chart + text
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                  Chart + text
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                  Chart + text
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                  Chart + text
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                  Chart + text
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                <Map center={[-38.15257984677826, 176.26486301422122]} zoom={14} style={{ width: '100%', height: 600 }}>
                  <TileLayer
                    attribution="Map tiles by Stamen Design"
                    url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
                  />
                </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
