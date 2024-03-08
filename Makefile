.PHONY: backend frontend

backend:
	cd backend && npm run dev

frontend:
	cd frontend && npm run dev

start:
	make backend & make frontend

add:
	git status
	git add .
	git status

# git commit -m "message"

trials:
	git push origin trials

main:
	git checkout main
	git branch
	git pull
	git checkout trials
