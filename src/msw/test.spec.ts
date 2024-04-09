import {
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
  test,
  expect,
} from 'vitest';
import { setupServer } from 'msw/node';
import fetch from 'node-fetch';

import { handlers } from './handlers';
import { todosData } from './mock-data/todos';

/** setupServer
 * 테스트 환경에서 서버를 설정하는 함수
 * 테스트 코드에서 주로 setupServer를 사용
 * */
const server = setupServer(...handlers);

beforeAll(() => server.listen());

beforeEach(() => server.resetHandlers());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Todo API Tests', () => {
  test('GET /todos', async () => {
    // when
    const response = await fetch('http://localhost:5173/todos');
    const data = await response.json();

    // then
    expect(response.status).toBe(200);
    expect(data).toEqual(todosData);
  });

  test('POST /todos', async () => {
    // given
    const newTodo = { title: 'Test Todo', completed: false };

    // when
    const response = await fetch('http://localhost:5173/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();

    // then
    expect(response.status).toBe(201);
    expect(data.id).toEqual(3);
  });

  test('DELETE /todos/:id', async () => {
    // given
    const targetId = 1;

    // when
    const response = await fetch(`http://localhost:5173/todos/${targetId}`, {
      method: 'DELETE',
    });
    const deletedId = await response.json();

    // then
    expect(response.status).toBe(200);
    expect(deletedId).toEqual(targetId);
  });
});
