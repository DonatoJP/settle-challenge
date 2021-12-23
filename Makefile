dev-up:
	cp ./src/back-app/.env.dev ./src/back-app/.env
	docker-compose -p "settle-challenge" up -d --build
.PHONY: dev-up

prod-up:
	cp ./src/back-app/.env.prod ./src/back-app/.env
	docker-compose -f "docker-compose-prod.yaml" -p "settle-challenge" up -d --build
.PHONY: prod-up

down:
	docker-compose -p "settle-challenge" down
.PHONY: down

down-v:
	docker-compose -p "settle-challenge" down -v
.PHONY: down-v

ps:
	docker-compose -p "settle-challenge" ps
.PHONY: ps

logs:
	docker-compose -p "settle-challenge" logs -f
.PHONY: logs