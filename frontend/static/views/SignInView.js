import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Sign-in");
  }

  async getHtml() {
    return `
    <main class="sign--in">
      <section class="sign--in--overlay">
        <p class="create--text">Sign In</p>
        <section class="form--box">
          <form class="form sign--in--form">
            <input
              class="sign--in--input sign--in--email-input"
              type="email"
              placeholder="EMAIL"
            />
            <input
              class="sign--in--input sign--in--password-input"
              type="password"
              placeholder="PASSWORD"
            />
            <button class="create--account-btn sign--in-btn" type="submit">
              Sign In
            </button>
          </form>
          <a class="forgot--password-btn" href="/forgot-password"
            >Forgot password ?</a
          >
          <p class="existing--account">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </section>
      </section>
    </main>
    `;
  }
}
