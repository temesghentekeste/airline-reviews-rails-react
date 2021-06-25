module Api
    module V    1
        class ReviewsController < ApplicationController

            def create 
                review = Review.new(reviews_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { error: review.errors.messages }, staus: 422
                end
            end

            def destroy 
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: { error: review.errors.messages }, staus: 422
                end
            end
            
            private 

            def reviews_params
                params.require(:reviews).permit(:title, :description, :score, :airline_id)
            end
        end
    end
end