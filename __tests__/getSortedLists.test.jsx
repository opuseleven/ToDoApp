import { getSortedLists } from '../services';

describe('getSortedLists function', () => {

  const testtodo1 = {
    id: 1,
    name: 'do something',
    completed: false
  }
  const testtodo2 = {
    id: 2,
    name: 'do something else',
    completed: false,
  }
  const testtodo3 = {
    id: 3,
    name: 'done something',
    completed: true
  }
  const testtodo4 = {
    id: 4,
    name: 'another one',
    completed: false
  }
  const testtodo5 = {
    id: 5,
    name: 'done something else',
    completed: true
  }

  const arr = [testtodo1, testtodo2, testtodo3, testtodo4, testtodo5];

  const sortedLists = getSortedLists(arr);

  it('Sorts array of ToDo objects into 2 lists', () => {
    expect(sortedLists.todoArr.length).toBe(3);
    expect(sortedLists.completedArr.length).toBe(2);
  })
})
