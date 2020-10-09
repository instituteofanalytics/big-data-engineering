# Zeppelin Notebook on Docker

### Pull latest Zeppelin Notebook from Dockerhub
docker pull apache/zeppelin:0.9.0

### Run Zeppelin 0.9.0
docker run -p 8080:8080 -v C:/Users/.../Downloads/:/downloads -v C:/Zeppelin/logs:/zeppelin/logs -v C:/Zeppelin/notebook:/zeppelin/notebook --name zeppelin_0.9.0 apache/zeppelin:0.9.0

### Enter into bash as root
docker exec --user root –it zeppelin_0.9.0 bash

# Jupyter Notebook on Docker

### Pull Jupyter-All-Spark-Notebook from Dockerhub
docker pull jupyter/all-spark-notebook

### Run Jupyter-All-Spark-Notebook
docker run -p -it 8888:8888 -v C:/Users/.../Downloads/:/downloads --name jupyter jupyter/all-spark-notebook

### Enter into bash as root
docker exec --user root –it jupyter bash
