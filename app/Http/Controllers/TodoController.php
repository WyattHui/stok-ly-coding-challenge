<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Todo;
use App\Http\Requests\TodoRequest;

class TodoController extends Controller
{
    public function create(TodoRequest $request)
    {
        $todo = new Todo($request->all());
        $todo->status = TODO::STATUS_PENDING;
        $todo->save();
        return $todo;
    }

    public function update(TodoRequest $request, Todo $todo)
    {
        $todo->update($request->all());
        return $todo;
    }

    public function pending(Todo $todo)
    {
        $todo->status = TODO::STATUS_PENDING;
        $todo->update();
        return $todo;
    }

    public function complete(Todo $todo)
    {
        $todo->status = TODO::STATUS_COMPLETE;
        $todo->update();
        return $todo;
    }

    public function delete(Todo $todo)
    {
        $todo->delete();
        return $todo;
    }

    public function list(Request $request)
    {
        $request->validate([
            'orderBy' => [
                'nullable',
                Rule::in(['id', 'description']),
            ],
        ]);

        $builder = Todo::select();
        if ($request->has('orderBy')) {
            $builder->orderBy($request->get('orderBy'), 'desc');
        }
        return $builder->get();
    }

    public function get(Todo $todo)
    {
        return $todo;
    }
}
