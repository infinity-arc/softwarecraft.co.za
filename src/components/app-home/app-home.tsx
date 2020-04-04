import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>

        <div class="app-home-inner">
          <h1>I will not write harmful code</h1>
          <p>a movement toward better software development practice in South Africa</p>
          <small>coming soon</small>
        </div>

        <footer>

        <a href="http://www.infinityarc.net" target="_blank">
          <div class="logo">
            <img src="../../assets/ia.png" alt="infinity arc" />
            <div>Infinity Arc <br />Foundation Affiliate</div>
          </div>
        </a>

        <a href="#" target="_blank">
          <div class="stencil">
          <div>Site created with stenciljs</div>
            <img src="../../assets/icon/icon.png" alt="stenciljs logo icon"></img>

          </div>
        </a>

        </footer>

      </div>
    );
  }
}
