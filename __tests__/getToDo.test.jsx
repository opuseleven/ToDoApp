import { getToDo } from '../services';

describe('getToDo function', () => {

  it('Returns a ToDo object', () => {
    const newToDo = getToDo(1, 'new to do', false);
    expect(newToDo.id).toBe(1);
    expect(newToDo.name).toBe('new to do');
    expect(newToDo.completed).toBe(false);
  })
})
