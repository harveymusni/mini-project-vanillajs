export class TodoItem extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.shadowRoot.innerHTML = `
          <style>
              .todo-item {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px;
                  border-bottom: 1px solid #ddd;
              }
              .delete-button {
                  background-color: #ff4d4d;
                  border: none;
                  color: white;
                  padding: 5px 10px;
                  cursor: pointer;
              }
          </style>
          <div class="todo-item">
              <span>${this.getAttribute('text')}</span>
              <button class="delete-button">Delete</button>
          </div>
      `;
      this.shadowRoot.querySelector('.delete-button').addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('delete', { detail: this }));
      });
  }
}

customElements.define('todo-item', TodoItem);
