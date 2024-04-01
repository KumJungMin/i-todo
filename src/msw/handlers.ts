import { http, HttpHandler, HttpResponse } from 'msw';

import type { Todo } from '../types/todo.ts';
import { todosData, lastId } from './mock-data/todos.ts';

let _lastId = lastId;
const _todosData = todosData.slice();

export const handlers: HttpHandler[] = [
  // GET /todos
  http.get('/todos', () => {
    return new HttpResponse(_todosData, { status: 200 });
  }),

  // POST /todos
  http.post('/todos', (req) => {
    const newTodo = { ...req.body, id: _lastId++ };
    _todosData.push(newTodo);

    return new HttpResponse(newTodo, { status: 201 });
  }),

  //  DELETE /todos/:id
  http.delete('/todos/:id', (req) => {
    const id = req.params.id;
    const index = _todosData.findIndex((todo: Todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.notFound();

    _todosData.splice(index, 1);
    return new HttpResponse(index, { status: 204 });
  }),
];
