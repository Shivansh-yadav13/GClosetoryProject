package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"shivansh-yadav13/closetory/backend/database"
	"shivansh-yadav13/closetory/backend/models"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func UpdateData(w http.ResponseWriter, r *http.Request) {

	EnableCors(&w)

	vars := mux.Vars(r)
	id, _ := primitive.ObjectIDFromHex(vars["id"])
	body, _ := ioutil.ReadAll(r.Body)
	defer r.Body.Close()

	var request models.Data
	json.Unmarshal(body, &request)

	database.GetAllData()
	result, err := database.UpdateData(id, request.Name, request.Price)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode("Error")
	} else {
		w.Header().Add("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(result)
	}
}
