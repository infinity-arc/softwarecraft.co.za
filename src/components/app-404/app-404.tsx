import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-404',
  styleUrl: 'app-404.css',
  shadow: true
})
export class App404 {

  render() {
    return (
      <div class='app-404'>

        <div class="app-404-inner">
          <h1>404</h1>
          <p>Not found</p>
        </div>

        <a href="http://www.infinityarc.net" target="_blank">
          <div class="logo">
            <img src="../../assets/ia.png" alt="infinity arc" />
            <div>Infinity Arc <br />Foundation Affiliate</div>
          </div>
        </a>
      </div>
    );
  }
}
