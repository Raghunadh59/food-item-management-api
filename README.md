# 🍽️ Food Item Management API

A **RESTful API** built using **Django** and **Django REST Framework (DRF)** for managing food items efficiently.  
It provides endpoints for creating, retrieving, updating, and deleting food items.

## 🚀 Features  
✅ CRUD operations (Create, Read, Update, Delete) for food items  
✅ Input validation and error handling  
✅ JSON-based API responses  
✅ Built using Django & Django REST Framework  
✅ Lightweight and easy to integrate  

---

## 🛠️ Technologies Used  
- **Python** (Programming Language)  
- **Django** (Web Framework)  
- **Django REST Framework** (API Development)  
- **SQLite3** (Default Database)  

---

## 📦 Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/Raghunadh59/food-item-management-api.git
cd food-item-management-api
```

### **2️⃣ Create a Virtual Environment**  
```sh
python -m venv venv
```
Activate it:  
- **Windows:** `venv\Scripts\activate`  
- **Mac/Linux:** `source venv/bin/activate`  

### **3️⃣ Install Dependencies**  
```sh
pip install -r requirements.txt
```

### **4️⃣ Apply Migrations**  
```sh
python manage.py migrate
```

### **5️⃣ Run the Development Server**  
```sh
python manage.py runserver
```
API will be available at: `http://127.0.0.1:8000/`

---

## 📌 API Endpoints  

| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/food-items/` | List all food items |
| **POST** | `/api/food-items/` | Create a new food item |
| **GET** | `/api/food-items/{id}/` | Retrieve a specific food item |
| **PUT** | `/api/food-items/{id}/` | Update a food item |
| **DELETE** | `/api/food-items/{id}/` | Delete a food item |

---

## 📤 Example API Request  

### **Create a New Food Item (POST)**
```sh
POST /api/food-items/
```
**Request Body (JSON)**  
```json
{
  "name": "Apple",
  "category": "Fruit",
  "price": 1.50,
  "stock": 100
}
```
**Response (201 Created)**  
```json
{
  "id": 1,
  "name": "Apple",
  "category": "Fruit",
  "price": 1.50,
  "stock": 100
}
```

---

## 🏗️ Project Structure  

```
food-item-management-api/
│── food_management/         # Main Django project folder
│   ├── settings.py          # Django settings
│   ├── urls.py              # Project-level URL configurations
│   ├── wsgi.py              # WSGI application
│── food_items/              # Django app for food items
│   ├── models.py            # Database models
│   ├── views.py             # API logic
│   ├── serializers.py       # DRF Serializers
│   ├── urls.py              # App-level routes
│── requirements.txt         # Dependencies list
│── manage.py                # Django management script
│── README.md                # Documentation
```

---

## 👨‍💻 Contributing  
1. **Fork** the repository  
2. **Clone** your forked repo:  
   ```sh
   git clone https://github.com/Raghunadh59/food-item-management-api.git
   ```
3. **Create a feature branch:**  
   ```sh
   git checkout -b feature-new-feature
   ```
4. **Commit your changes:**  
   ```sh
   git commit -m "Added new feature"
   ```
5. **Push to your fork:**  
   ```sh
   git push origin feature-new-feature
   ```
6. **Create a Pull Request**  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 💬 Questions?  
For any questions, feel free to **open an issue** or reach out! 🚀  