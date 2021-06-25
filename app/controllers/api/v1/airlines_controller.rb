module Api
    module V1
        class AirlinesController < ApplicationController
            protect_from_forgery with: :null_session

             # GET /api/v1/airlines
            def index 
                render json: AirlineSerializer.new(airlines, options).serialized_json
            end

            # GET /api/v1/airlines/:slug
            def show 
                render json: AirlineSerializer.new(airline, options).serialized_json
            end

            # POST /api/v1/airlines
            def create 
                airline = Airline.new(airline_params)

                if airline.save
                    render json: AirlineSerializer.new(airline).serialized_json
                else
                    render json: { error: airline.errors.messages}, status: 422
                end
            end

            # PATCH /api/v1/airlines/:slug
            def update

                if airline.update(airline_params)
                    render json: AirlineSerializer.new(airline, options).serialized_json
                else
                    render json: { error: airline.errors.messages}, status: 422
                end

            end

            # DELETE /api/v1/airlines/:slug
            def destroy

                if airline.destroy
                    head :no_content
                else
                    render json: { error: airline.errors.messages}, status: 422
                end
                
            end

            private 

            def airline_params
                params.require(:ariline).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews]}
            end

            # Get all airlines
            def airlines
                @airlines ||= Airline.all
            end

            # Get a specific airline
            def airline
                @airline ||= Airline.find_by(slug: params[:slug])
            end
        end
    end
end