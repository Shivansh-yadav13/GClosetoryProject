package routes

import (
	"net/http"
	"shivansh-yadav13/closetory/backend/handlers"

	"github.com/gorilla/mux"
)

func Routes() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/get_alldata", handlers.GetAllData).Methods(http.MethodGet)
	router.HandleFunc("/api/get_singledata/{id}", handlers.GetData).Methods(http.MethodGet)
	router.HandleFunc("/api/post_data", handlers.AddData).Methods(http.MethodPost)
	router.HandleFunc("/api/del_data/{id}", handlers.RemoveData).Methods(http.MethodDelete)
	router.HandleFunc("/api/update_data/{id}", handlers.UpdateData).Methods(http.MethodPut)

	return router
}
