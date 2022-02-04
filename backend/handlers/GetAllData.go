package handlers

import (
	"encoding/json"
	"net/http"
	"shivansh-yadav13/closetory/backend/database"
	"shivansh-yadav13/closetory/backend/mocks"
)

func GetAllData(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	database.GetAllData()
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mocks.DisplayData)
}
