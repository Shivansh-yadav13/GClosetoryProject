package database

import (
	"context"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func InitDatabase() *mongo.Client {
	mongo_pass := os.Getenv("MONGO_GC_PASS")
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb+srv://admin:"+mongo_pass+"@gclosetory-cluster.y6ngf.mongodb.net/sample?retryWrites=true&w=majority"))
	if err != nil {
		panic(err)
	}

	return client
}
