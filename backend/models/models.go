package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Data struct {
	ID    primitive.ObjectID `bson:"_id" json:"id,omitempty"`
	Name  string             `json:"name"`
	Price int64              `json:"price"`
}
