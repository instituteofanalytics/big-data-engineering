If you have Spark and Jupyter Notebook in windows already, then we can run directly in windows without the use of Docker.

PFA Notebook and python script (to be run from command prompt)

Note: Run python script before executing cells in the jupyter notebook

Required package:
>pip install tweepy

Reference: 
1. https://medium.com/@distillerytech/bringing-big-tools-to-big-data-spark-and-spark-streaming-ed93f5b478d7
2. https://towardsdatascience.com/hands-on-big-data-streaming-apache-spark-at-scale-fd89c15fa6b0


------------------------------ USING DOCKER ----------------------------

Step 1: Install/Run Jupyter image in docker
>docker run -p 8888:8888 -v C:/Users/ioa/Downloads/:/downloads --name jupyter jupyter/all-spark-notebook

Step 2: 
Goto http://localhost:8888/ and enter token displayed in the previous step