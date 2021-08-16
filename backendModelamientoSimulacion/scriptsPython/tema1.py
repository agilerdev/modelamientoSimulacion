import dataframe_image as dfimg
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import style
import sys
from ast import literal_eval
import time
rutaDatos = sys.argv[1]
tipoArchivoDatos = sys.argv[2]
datos=pd.DataFrame()
if tipoArchivoDatos == 'csv':
    datos = pd.read_csv(rutaDatos)
else:
    datos = pd.read_excel(rutaDatos)
plt.rcParams['image.cmap'] = "bwr"
#plt.rcParams['figure.dpi'] = "100"
plt.rcParams['savefig.bbox'] = "tight"
style.use('ggplot') or plt.style.use('ggplot')

fig, ax = plt.subplots(figsize=(6, 3.84))

datos.plot(
    x    = 'pruebas_totales_cdmx',
    y    = 'positivos_totales_cdmx',
    c    = 'blue',
    kind = "scatter",
    ax   = ax
    
)

nombreArchivoGrafica = str(time.time())+'.svg'
nombreArchivoDatos = str(time.time())+'.png'

dfimg.export(datos.describe(),'./public/images/'+nombreArchivoDatos)
plt.savefig('./public/images/'+nombreArchivoGrafica);
print(nombreArchivoDatos)
print(nombreArchivoGrafica)

