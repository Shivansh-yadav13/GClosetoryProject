package main

import (
	"log"
	"net/http"
	"shivansh-yadav13/closetory/backend/routes"
)

func main() {
	log.Println("Api running at Port 3001 http://localhost:3001")
	http.ListenAndServe(":3001", routes.Routes())
}
