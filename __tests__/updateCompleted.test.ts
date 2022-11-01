import { updateCompleted } from '../services';
import { ToDo } from '../types';

describe('updateCompleted', () => {

  let testToDo: ToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  it('Updates the value of ToDo completed prop', () => {
    updateCompleted(testToDo, !testToDo.completed);
    expect(testToDo.completed).toBe(true);
  })
  
  it('Reverses the value as well', () => {
    updateCompleted(testToDo, !testToDo.completed);
    expect(testToDo.completed).toBe(false);
  })
})
