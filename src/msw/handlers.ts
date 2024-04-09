import { http, HttpHandler, HttpResponse } from 'msw';

import type { Todo } from '../types/todo';
import { todosData, lastId } from './mock-data/todos';

let copiedLastId = lastId;
const copiedTodosData = todosData.slice();

// eslint-disable-next-line import/prefer-default-export
export const handlers: HttpHandler[] = [
  // GET /todos
  http.get('http://localhost:5173/todos', () => HttpResponse.json(copiedTodosData, { status: 200 })),

  // POST /todos
  http.post('http://localhost:5173/todos', (req) => {
    copiedLastId += 1;
    const newTodo = { ...req.body, id: copiedLastId };
    copiedTodosData.push(newTodo);

    return HttpResponse.json(newTodo, { status: 201 });
  }),
  //  DELETE /todos/:id
  http.delete('http://localhost:5173/todos/:id', (req) => {
    const id = Number(req.params.id);
    const index = copiedTodosData.findIndex((todo: Todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.json(id, { status: 404 });

    copiedTodosData.splice(index, 1);
    return HttpResponse.json(id, { status: 200 });
  }),
];
