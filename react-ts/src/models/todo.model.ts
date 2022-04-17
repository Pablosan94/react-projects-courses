class TodoModel {
  id: string;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.text = text;
    this.done = false;
  }
}

export default TodoModel;