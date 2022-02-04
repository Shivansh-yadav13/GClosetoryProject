package database

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func AddData(req_name string, req_price int64) (*mongo.InsertOneResult, error) {

	client := InitDatabase()
	coll := client.Database("sample").Collection("data")

	request := bson.D{{"name", req_name}, {"price", req_price}}

	result, err := coll.InsertOne(context.TODO(), request)

	return result, err
}
