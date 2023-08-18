import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Register");
  }

  async getHtml() {
    return `
    <main class="register">
      <section class="register--overlay">
        <p class="create--text">Create Account</p>
        <section class="form--box">
          <form class="form register-form" id="regId" autocomplete="off">
            <input
              class="register--input name-input"
              type="text"
              name="name"
              placeholder="NAME"
            />
            <input
              class="register--input email-input"
              type="email"
              name="email"
              placeholder="EMAIL"
            />
            <input
              class="register--input password-input"
              type="password"
              name="password"
              placeholder="PASSWORD"
            />
            <button class="create--account-btn" type="submit">
              Create Account
            </button>
          </form>
          <p class="existing--account">
            Already have an account? <a href="/sign-in">Sign in</a>
          </p>
        </section>
      </section>
    </main>
    `;
  }
}
