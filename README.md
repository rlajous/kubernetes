# kubernete

Paso a paso:

1- Arrancar el cluster con el comando:

	 minikube start --nodes 3 -p multinode-demo

2- Aplicamos el rest-api.yml

	kubectl apply -f rest-api.yml

Opcional:

	Con el siguiente comando se expone el servicio

	minikube service list -p multinode-demo

Opcional:

	Con el siguiente comando se abre un dashboard en el browser

	minikube dashboard -p multinode-demo
