CREATE TABLE IF NOT EXISTS TablaComentarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Usuario TEXT, 
    Comentario TEXT
);

INSERT or IGNORE INTO TablaComentarios(id, Usuario, Comentario) VALUES (1, 'Pepito', 'Esta delicioso el plantillo ');
INSERT or IGNORE INTO TablaComentarios(id, Usuario, Comentario) VALUES (2, 'Juanito', 'Muy bueno el platillo');