package main

import (
	"time"

	"helo/rgbcolor"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/cors"
)

// https://blog.drewolson.org/go-dependency-injection-with-wire
// dagger?

func main() {

	rgbcolor.InitDb()

	router := gin.Default()
	enableCors(router)

	router.GET("/hola", func(c *gin.Context) {
		c.JSON(200, "hola")
	})
	colors := router.Group("/rgbColors")
	{
		colors.GET("/:id", rgbcolor.GetColor)
		colors.PUT("/:id", rgbcolor.PutColor)
	}

	router.Run("0.0.0.0:8080")
}

func enableCors(router *gin.Engine) {
	router.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"*"},
		AllowMethods:  []string{"*"},
		AllowHeaders:  []string{"*"},
		ExposeHeaders: []string{"*"},
		MaxAge:        10 * time.Second,
	}))
}
