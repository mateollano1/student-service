## Student service API
### Obtener estudiantes
Obtiene una lista de los estudiantes registrados en la base de datos. <br>
**URL**: /students  <br>
**Method**: [GET] <br>
**Ejemplo**: localhost:3000/students <br>
**Request:**  
`{}` <br>
**Response:**  
format: JSON
` {

	[
		{ 
			_id:  ID",    
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    },]} `

### Obtener Estudiante
Obtiene información de un estudiante registrado en la base de datos. <br>
**URL**: /students/${id} <br>
**Method**: [GET] <br>
**Ejemplo**: localhost:3000/students/1545 <br>
**Request:**  
`{}` <br>
**Response:**  
format: JSON


		`{ 
			_id:  ID",    
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    } `
### Modificar Registro
Modifica un registro existente con un nuevo valor. <br>
**URL**: /students/${id} <br>
**Method**: [PUT] <br>
**Ejemplo**: localhost:3000/students/1545 <br>
**Request:**  
`{ 
			_id:  ID",    
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    }} ` <br>
    **Response:**  
format: JSON


		`{ 
			_id:  ID",    
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    } `
### Crear un registro
Crea un nuevo estudiante. <br>
**URL**: /students <br>
**Method**: [POST] <br>
**Ejemplo**: localhost:3000/students <br>
**Request:**  
`{     
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    }} ` <br>
    **Response:**  
`{     
			_id:  ID",  
		    firstName:  String,
	        lastName:  String,      
		    email:  String,
		    phoneNumber:  Number, 
		    subjectId:  ID,
		    score:  Number,        
		    address:  String,        
		    city:  String,        
    }} `

### Eliminar estudiante
Elimina estudiante registrado. <br>
**URL**: /students <br>
**Method**: [DELETE] <br>
**Ejemplo**: localhost:3000/students/${idEstudiante} <br>
**Request:**  
`{}` <br>
**Response:**
`{}`
### Promedio de notas por curso
Retorna el promedio de las notas de los estudiantes pertenecientes a un curso dado su id. <br>

**URL**:  /students/average/${subjectId} <br>

**Method**:  [DELETE] <br>
**Ejemplo**: localhost:3000/students/${idEstudiante} <br>
**Request:**  
`{}` <br>
**Response:**
`{}`
