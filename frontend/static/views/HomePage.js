import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <main class="homepage">
      <div class="homepage--overlay">
        <div class="homepage--content">
          <p class="logo--text">Auth-System</p>
          <section class="page--body">
            <h1 class="body--header">Full Authentication System</h1>
            <ul class="authentication--features">
              <li class="single--feature">Register/Login</li>
              <li class="single--feature">Email Verification</li>
              <li class="single--feature">Password Reset</li>
            </ul>
            <div class="reg--login-btn">
              <a href="/register" class="register--btn btn" data-link
                >Register</a
              >
              <a href="/sign-in" class="sign--in--btn btn" data-link>
                Sign In
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
    `;
  }
}
