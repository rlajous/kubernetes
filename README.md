# Kubernetes

## Instalacion

* [Docker](https://docs.docker.com/engine/install/)
* [Minikube](https://minikube.sigs.k8s.io/docs/start/)
* [TP Redes](https://github.com/rlajous/kubernetes)

Paso a paso:

1- Arrancar el cluster con el comando:

	 minikube start --nodes 3 -p multinode-demo

2- Aplicamos el rest-api.yml

	kubectl apply -f rest-api.yml

3- Aplicamos el service.yml

	kubectl apply -f service.yml

4- Aplicamos el proxy.yml.yml

	kubectl apply -f proxy.yml.yml

5- Aplicamos el rest-api-v2.yml

	kubectl apply -f rest-api-v2.yml

Opcional:

	Con el siguiente comando se expone el servicio

	minikube service list -p multinode-demo

Opcional:

	Con el siguiente comando se abre un dashboard en el browser

	minikube dashboard -p multinode-demo
