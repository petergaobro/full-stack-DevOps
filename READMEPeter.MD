# Devops challenge did by PENG (Peter)
```shell
npm run build
npm run dev
```
# Docker Network Setting
```shell
docker network create --driver bridge peter-network
```

# postgresql setting
```shell
docker run \
--network peter-network \
--name container-postgres \
-p 5433:5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=GAOpeng123 \
-e POSTGRES_DB=postgres \
-d postgres:latest
```

# api (backend) setting
docker build -t api-app:latest .
docker run --rm --network peter-network -p 8765:8765 --name container-api -d api-app:latest


# docker build -t api-app:latest --progress=plain .

# docker run -p 8080:8080 --name container-api --link container-postgres:postgres -e POSTGRES_HOST=postgres -e POSTGRES_PORT=5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=GAOpeng123 -e POSTGRES_DB=postgres -d api-app:latest


# docker run --name container-api -d -p:8080:8000 api-app:latest
# docker run --name container-api -p 8080:8000 api-app:latest

# dashboard (frontend) setting
docker build -t dashboard-app:latest .
docker run --network peter-network -p 5173:80 --name container-dashboard -d dashboard-app:latest

# docker run --name container-dashboard -d -p:5173:80 dashboard-app:latest

# docker run --rm --name container-dashboard -d -p:5173:80 dashboard-app:latest




