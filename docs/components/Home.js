'use strict'

import React from 'react'

import { Docs } from '../../src/index.js'

var file =
`
/*
//Accordion

    <div class="accordion">
      <div class="accordion__item">
        <h3 class="accordion__title js-title">...</h3>
        <p class="accordion__copy {{accordion__copy--open}}">...</p>
      </div>
      ...
    </div>

*/
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}
.accordion__title {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1rem 1.5rem;
  background: #5B5F97;
  color: white;
  cursor: pointer;
  transition: .3s ease;
}
.accordion__title:hover {
  background: #484b77;
}
.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}
.accordion__copy--open {
  display: block;
}
`

export class Home extends React.Component {

  render() {
    return <Docs markdown={{ test: file }} />
  }
}

export default Home
