class TodosController < ApplicationController
  
    def index
      render json: Todo.all
    end
  
    def create
      todo = @current_user.todos.create!(recipe_params)
      render json: todo, status: :created
    end
  
    private
  
    def todo_params
      params.permit(:title, :instructions)
    end
  
  end