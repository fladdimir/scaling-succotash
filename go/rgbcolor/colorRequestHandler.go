package rgbcolor

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetColor - returns color if found in db
func GetColor(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, err.Error())
		return
	}
	var color RgbColor
	result := Db.First(&color, id)
	if result.Error != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, result.Error.Error())
		return
	}
	c.JSON(200, color)
}

// PutColor - saves color to db
func PutColor(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, err.Error())
		return
	}

	var color RgbColor
	if err := c.ShouldBindJSON(&color); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, err.Error())
		return
	}
	color.ID = id

	Db.Save(color)

	c.JSON(200, color)
}
