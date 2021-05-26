const { green } = require("chalk");
const { errorHandler } = require("./errorHandler");

const isProd = process.env.NODE_ENV === "production";

async function render(bundleRenderer, context, req, res) {
  const now = Date.now();

  res.setHeader("Content-Type", "text/html");

  try {
    const content = await bundleRenderer.renderToString(context);

    const html = `
<!DOCTYPE html>
<html ⚡>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="canonical" href="#">
    <title>Hello Vue 3</title>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    ${getAMPstyles()}
  </head>
  <body>
    <div id="app">${content}</div>
  </body>
</html>  
    `.trim();

    res.send(html);

    if (!isProd) {
      // eslint-disable-next-line no-console
      console.log(green(`Whole request took: ${Date.now() - now}ms`));
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
}

module.exports = { render };

function getAMPstyles() {
  return `<style amp-custom="">
  /*!
  * Bootstrap AMP project minimal
  *
  * Copyright 2011-2017 The Bootstrap Authors
  * Copyright 2011-2017 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */

  @font-face {
    font-family: 'Open Sans';
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
  
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 576px) {
  .container {
    width: 540px;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 720px;
    max-width: 100%;
  }
}

.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 576px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 768px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1, .col,
.col-auto, .col-sm-1, .col-sm,
.col-sm-auto, .col-md-1, .col-md,
.col-md-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .col-1, .col,
  .col-auto, .col-sm-1, .col-sm,
  .col-sm-auto, .col-md-1, .col-md,
  .col-md-auto {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .col-1, .col,
  .col-auto, .col-sm-1, .col-sm,
  .col-sm-auto, .col-md-1, .col-md,
  .col-md-auto {
    padding-right: 15px;
    padding-left: 15px;
  }
}

.col {
  -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  width: auto;
}

.col-1 {
  width: 100%;
}

.pull-0 {
  right: auto;
}

.pull-1 {
  right: 100%;
}

.push-0 {
  left: auto;
}

.push-1 {
  left: 100%;
}

@media (min-width: 576px) {
  .col-sm {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    width: 100%;
  }
  .pull-sm-0 {
    right: auto;
  }
  .pull-sm-1 {
    right: 100%;
  }
  .push-sm-0 {
    left: auto;
  }
  .push-sm-1 {
    left: 100%;
  }
  .offset-sm-0 {
    margin-left: 0%;
  }
}

@media (min-width: 768px) {
  .col-md {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-md-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    width: 100%;
  }
  .pull-md-0 {
    right: auto;
  }
  .pull-md-1 {
    right: 100%;
  }
  .push-md-0 {
    left: auto;
  }
  .push-md-1 {
    left: 100%;
  }
  .offset-md-0 {
    margin-left: 0%;
  }
}

.btn {
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  margin: 2px;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn:focus, .btn:hover {
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: .65;
}

.btn:active, .btn.active {
  background-image: none;
}

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:hover {
  color: #fff;
  background-color: #025aa5;
  border-color: #01549b;
}

.btn-primary:focus, .btn-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:active, .btn-primary.active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #025aa5;
  background-image: none;
  border-color: #01549b;
}

.btn-secondary {
  color: #292b2c;
  background-color: #fff;
  border-color: #ccc;
}

.btn-secondary:hover {
  color: #292b2c;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.btn-secondary:focus, .btn-secondary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  background-color: #fff;
  border-color: #ccc;
}

.btn-secondary:active, .btn-secondary.active,
.show > .btn-secondary.dropdown-toggle {
  color: #292b2c;
  background-color: #e6e6e6;
  background-image: none;
  border-color: #adadad;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #2aabd2;
}

.btn-info:focus, .btn-info.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-info:active, .btn-info.active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #31b0d5;
  background-image: none;
  border-color: #2aabd2;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #419641;
}

.btn-success:focus, .btn-success.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-success:active, .btn-success.active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #449d44;
  background-image: none;
  border-color: #419641;
}

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #eb9316;
}

.btn-warning:focus, .btn-warning.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-warning:active, .btn-warning.active,
.show > .btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #ec971f;
  background-image: none;
  border-color: #eb9316;
}

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #c12e2a;
}

.btn-danger:focus, .btn-danger.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:active, .btn-danger.active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #c9302c;
  background-image: none;
  border-color: #c12e2a;
}

.btn-outline-primary {
  color: #0275d8;
  background-color: transparent;
  background-image: none;
  border-color: #0275d8;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #0275d8;
  background-color: transparent;
}

.btn-outline-primary:active, .btn-outline-primary.active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-outline-secondary {
  color: #ccc;
  background-color: transparent;
  background-image: none;
  border-color: #ccc;
}

.btn-outline-secondary:hover {
  color: #292b2c;
  background-color: #ccc;
  border-color: #ccc;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #ccc;
  background-color: transparent;
}

.btn-outline-secondary:active, .btn-outline-secondary.active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: #292b2c;
  background-color: #ccc;
  border-color: #ccc;
}

.btn-outline-info {
  color: #5bc0de;
  background-color: transparent;
  background-image: none;
  border-color: #5bc0de;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-outline-info:focus, .btn-outline-info.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #5bc0de;
  background-color: transparent;
}

.btn-outline-info:active, .btn-outline-info.active,
.show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-outline-success {
  color: #5cb85c;
  background-color: transparent;
  background-image: none;
  border-color: #5cb85c;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-outline-success:focus, .btn-outline-success.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #5cb85c;
  background-color: transparent;
}

.btn-outline-success:active, .btn-outline-success.active,
.show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-outline-warning {
  color: #f0ad4e;
  background-color: transparent;
  background-image: none;
  border-color: #f0ad4e;
}

.btn-outline-warning:hover {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #f0ad4e;
  background-color: transparent;
}

.btn-outline-warning:active, .btn-outline-warning.active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-outline-danger {
  color: #d9534f;
  background-color: transparent;
  background-image: none;
  border-color: #d9534f;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #d9534f;
  background-color: transparent;
}

.btn-outline-danger:active, .btn-outline-danger.active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-link {
  font-weight: normal;
  color: #0275d8;
  border-radius: 0;
}

.btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {
  background-color: transparent;
}

.btn-link, .btn-link:focus, .btn-link:active {
  border-color: transparent;
}

.btn-link:hover {
  border-color: transparent;
}

.btn-link:focus, .btn-link:hover {
  color: #014c8c;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link:disabled {
  color: #636c72;
}

.btn-link:disabled:focus, .btn-link:disabled:hover {
  text-decoration: none;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.navbar {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar > .container,
.navbar > .container-fluid {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

@media (max-width: 575px) {
  .navbar > .container,
  .navbar > .container-fluid {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:focus, .navbar-brand:hover {
  text-decoration: none;
}

.navbar-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
          flex-basis: 100%;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:focus, .navbar-toggler:hover {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid {
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-collapse {
    display: -webkit-box ;
    display: -webkit-flex ;
    display: -ms-flexbox ;
    display: flex ;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-collapse {
    display: -webkit-box ;
    display: -webkit-flex ;
    display: -ms-flexbox ;
    display: flex ;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: .5rem;
  padding-left: .5rem;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: -webkit-box ;
  display: -webkit-flex ;
  display: -ms-flexbox ;
  display: flex ;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-inverse .navbar-brand {
  color: white;
}

.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {
  color: white;
}

.navbar-inverse .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-inverse .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-inverse .navbar-nav .show > .nav-link,
.navbar-inverse .navbar-nav .active > .nav-link,
.navbar-inverse .navbar-nav .nav-link.show,
.navbar-inverse .navbar-nav .nav-link.active {
  color: white;
}

.navbar-inverse .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-inverse .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-inverse .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.bg-faded {
  background-color: #f7f7f7;
}

.bg-primary {
  background-color: #0275d8 ;
}

a.bg-primary:focus, a.bg-primary:hover {
  background-color: #025aa5 ;
}

.bg-success {
  background-color: #5cb85c ;
}

a.bg-success:focus, a.bg-success:hover {
  background-color: #449d44 ;
}

.bg-info {
  background-color: #5bc0de ;
}

a.bg-info:focus, a.bg-info:hover {
  background-color: #31b0d5 ;
}

.bg-warning {
  background-color: #f0ad4e ;
}

a.bg-warning:focus, a.bg-warning:hover {
  background-color: #ec971f ;
}

.bg-danger {
  background-color: #d9534f ;
}

a.bg-danger:focus, a.bg-danger:hover {
  background-color: #c9302c ;
}

.bg-inverse {
  background-color: #292b2c ;
}

a.bg-inverse:focus, a.bg-inverse:hover {
  background-color: #101112 ;
}
/*# sourceMappingURL=bootstrap-amp.css.map */
  </style>`
}