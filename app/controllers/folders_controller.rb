class FoldersController < ApplicationController
  before_action :set_folder!, only: %i[edit update show]

  def index
    @folders = Folder.order created_at: :desc
  end

  def new
    @folder = Folder.new
  end

  def create
    @folder = Folder.new folders_params
    if @folder.save
      # redirect_to folders_path
    else
      render :new
    end
  end

  def show; end

  def edit; end

  def update
    if @folder.update folders_params
      redirect_to folders_path
    else
      render :edit
    end
  end

  private

  def set_folder!
    @folder = Folder.find params[:id]
  end

  def folders_params
    params.require(:folder).permit(:title, :description)
  end
end
