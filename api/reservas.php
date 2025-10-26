<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configuración de la base de datos
$host = 'localhost';
$dbname = 'ruta_maiz';
$username = 'root';
$password = '';

// Establecer conexión
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error de conexión a la base de datos',
        'message' => $e->getMessage()
    ]);
    exit();
}

// Obtener el método HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Manejar GET - Obtener todas las reservas
if ($method === 'GET') {
    try {
        $stmt = $pdo->query('SELECT * FROM reservas ORDER BY fecha_reserva DESC');
        $reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'total' => count($reservas),
            'reservas' => $reservas
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Error al obtener las reservas',
            'message' => $e->getMessage()
        ]);
    }
    exit();
}

// Manejar POST - Crear una nueva reserva
if ($method === 'POST') {
    try {
        // Obtener datos del body
        $data = json_decode(file_get_contents('php://input'), true);
        
        $nombre_completo = $data['nombre_completo'] ?? '';
        $correo_electronico = $data['correo_electronico'] ?? '';
        $telefono = $data['telefono'] ?? '';
        $cantidad_entradas = $data['cantidad_entradas'] ?? 0;
        
        // Validaciones
        if (empty($nombre_completo) || empty($correo_electronico) || empty($telefono) || $cantidad_entradas < 1) {
            http_response_code(400);
            echo json_encode([
                'error' => 'Todos los campos son requeridos y la cantidad debe ser mayor a 0'
            ]);
            exit();
        }
        
        // Validar email
        if (!filter_var($correo_electronico, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode([
                'error' => 'El correo electrónico no es válido'
            ]);
            exit();
        }
        
        // Calcular precios
        $precio_unitario = 180.00;
        $precio_total = $cantidad_entradas * $precio_unitario;
        
        // Insertar en la base de datos
        $stmt = $pdo->prepare(
            'INSERT INTO reservas 
             (nombre_completo, correo_electronico, telefono, cantidad_entradas, precio_unitario, precio_total) 
             VALUES (?, ?, ?, ?, ?, ?)'
        );
        
        $stmt->execute([
            $nombre_completo,
            $correo_electronico,
            $telefono,
            $cantidad_entradas,
            $precio_unitario,
            $precio_total
        ]);
        
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Reserva creada exitosamente',
            'reserva' => [
                'id' => $pdo->lastInsertId(),
                'nombre_completo' => $nombre_completo,
                'correo_electronico' => $correo_electronico,
                'telefono' => $telefono,
                'cantidad_entradas' => $cantidad_entradas,
                'precio_total' => $precio_total
            ]
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Error al procesar la reserva',
            'message' => $e->getMessage()
        ]);
    }
    exit();
}

// Si el método no está soportado
http_response_code(405);
echo json_encode([
    'error' => 'Método no permitido'
]);
?>
