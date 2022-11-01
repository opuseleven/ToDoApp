import { updateToDo } from '../services';
import { ToDo } from '../types';

describe('updateToDo service', () => {

  let testToDo: ToDo = {
    id: 1,
    name: 'test todo',
    completed: false
  }

  it('Updates the value of ToDo name prop', () => {
    updateToDo(testToDo, 'something else');
    expect(testToDo.name).toBe('something else');
  })
})
