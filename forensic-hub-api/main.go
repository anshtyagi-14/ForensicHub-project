package main

import (
	"fmt"
	"net/http"
	"time"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("my_secret_key")
var users = make(map[string]string)

type AuthPayload struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password"binding:"required"`
}

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:   []string{"http://localhost:5173"},
		AllowMethods:   []string{"GET", "POST"},
		AllowHeaders:   []string{"Origin", "Content-Type"},
	}))

	router.POST("/signup", handleSignup)
	router.POST("/login", handleLogin)

	router.Run(":8080")
}

func generateJWT(email string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": email,
		"exp":   time.Now().Add(time.Hour * 24).Unix(),
	})
	return token.SignedString(jwtKey)
}

func handleSignup(c *gin.Context) {
	var payload AuthPayload
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid input"}) // <-- Changed "error" to "message"
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(payload.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to hash password"}) // <-- Changed "error" to "message"
		return
	}

	users[payload.Email] = string(hashedPassword)

		fmt.Println("Current users:", users)

	tokenString, err := generateJWT(payload.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate token"}) // <-- Changed "error" to "message"
		return
	}

	// <-- Added a message to the success response
	c.JSON(http.StatusCreated, gin.H{
		"message": "User created successfully",
		"token":   tokenString,
	})

}

func handleLogin(c *gin.Context) {
	var payload AuthPayload
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid input"}) // <-- Changed "error" to "message"
		return
	}

	hashedPassword, userExists := users[payload.Email]
	if !userExists {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid credentials"}) // <-- Changed "error" to "message"
		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(payload.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid credentials"}) // <-- Changed "error" to "message"
		return
	}

	tokenString, err := generateJWT(payload.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate token"}) // <-- Changed "error" to "message"
		return
	}

	// <-- Added a message to the success response
	c.JSON(http.StatusOK, gin.H{
		"message": "Login successful",
		"token":   tokenString,
	})
}