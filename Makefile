.PHONY: docs test

help:
		@echo "start: install all dependencies, build both server code and client-side JS apps, and run the server"

test:
		npm build; karma start;
