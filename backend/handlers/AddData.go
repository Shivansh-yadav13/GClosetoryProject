package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"shivansh-yadav13/closetory/backend/database"
	"shivansh-yadav13/closetory/backend/models"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func AddData(w http.ResponseWriter, r *http.Request) {

	EnableCors(&w)

	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()

	if err != nil {
		panic(err)
	}

	var request models.Data
	json.Unmarshal(body, &request)

	insertRes, err := database.AddData(request.Name, request.Price)
	genId := insertRes.InsertedID

	request.ID = genId.(primitive.ObjectID)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(err)
	} else {
		w.Header().Add("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(request)
	}

}
