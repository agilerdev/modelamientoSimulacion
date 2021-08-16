const {PythonShell} = require('python-shell')

exports.tema1 = function (req, res){


	 if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
	archivoDatos = req.files.datos;
  const extension = archivoDatos.name.split('.').pop();
  console.log(extension);
	nuevoNombre = new Date().getMilliseconds().toString()+ archivoDatos.name;

	uploadPath = './public/archivos/' + nuevoNombre;
	archivoDatos.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).json({'error': err});

  });

  const options ={
    pythonPath: '/Users/agiler/opt/anaconda3/bin/python',
    args: [`./public/archivos/${nuevoNombre}`, extension]
  }

  PythonShell.run('./scriptsPython/tema1.py', options, function (err, results) {
    if (err) throw err;
    res.status(200).json({'datos': results[0], 'grafica': results[1]});
  }); 

}
