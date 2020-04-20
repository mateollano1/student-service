## Student service API
### Obtener estudiantes
Obtiene una lista de los estudiantes registrados en la base de datos.
**URL**: /students  
**Method**: [GET]
**Ejemplo**: localhost:3000/students
**Request:**  
`{}`
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
Obtiene información de un estudiante registrado en la base de datos.
**URL**: /students/${id}
**Method**: [GET]
**Ejemplo**: localhost:3000/students/1545
**Request:**  
`{}`
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
Modifica un registro existente con un nuevo valor.
**URL**: /students/${id}
**Method**: [PUT]
**Ejemplo**: localhost:3000/students/1545
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
    }} `
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
Crea un nuevo estudiante.
**URL**: /students
**Method**: [POST]
**Ejemplo**: localhost:3000/students
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
    }} `
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
Elimina estudiante registrado.
**URL**: /students
**Method**: [DELETE]
**Ejemplo**: localhost:3000/students/${idEstudiante}
**Request:**  
`{}`
**Response:**
`{}`
### Promedio de notas por curso
Retorna el promedio de las notas de los estudiantes pertenecientes a un curso dado su id.

**URL**:  /students/average/${subjectId}

**Method**:  [DELETE]
**Ejemplo**: localhost:3000/students/${idEstudiante}
**Request:**  
`{}`
**Response:**
`{}`
