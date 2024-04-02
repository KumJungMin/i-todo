import { http, HttpHandler, HttpResponse } from 'msw';

import type { Todo } from '../types/todo.ts';
import { todosData, lastId } from './mock-data/todos.ts';

let _lastId = lastId;
const _todosData = todosData.slice();

export const handlers: HttpHandler[] = [
  // GET /todos
  http.get('http://localhost:5173/todos', () => {
    return HttpResponse.json(_todosData, { status: 200 });
  }),

  // POST /todos
  http.post('http://localhost:5173/todos', (req) => {
    const newTodo = { ...req.body, id: _lastId++ };
    _todosData.push(newTodo);

    return HttpResponse.json(newTodo, { status: 201 });
  }),

  //  DELETE /todos/:id
  http.delete('http://localhost:5173/todos/:id', (req) => {
    const id = req.params.id;
    const index = _todosData.findIndex((todo: Todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.json(id, { status: 404 });

    _todosData.splice(index, 1);
    return HttpResponse.json(id, { status: 200 });
  }),
];
