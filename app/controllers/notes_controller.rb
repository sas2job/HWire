class NotesController < ApplicationController
  def index
    @notes = current_user.notes
  end

  def new
    @note = current_user.notes.build
  end

  def create
    @note = current_user.notes.build note_params
    if @note.save
      flash.now[:success] = "Note created!"
    else
      render :new
    end
  end

  def edit
    @note = current_user.notes.find params[:id]
  end

  def update
    @note = current_user.notes.find params[:id]
    if @note.update note_params
      flash.now[:success] = "Note updated!"
    else
      render :edit
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :description)
  end
end
