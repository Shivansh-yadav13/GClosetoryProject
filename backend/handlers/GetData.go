package handlers

import (
	"encoding/json"
	"net/http"
	"shivansh-yadav13/closetory/backend/database"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetData(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	vars := mux.Vars(r)
	id, _ := primitive.ObjectIDFromHex(vars["id"])
	result := database.GetData(id)
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(result)
}
