clean:
	rm -rf dist

# test:
# 	npx parcel tests/pacer.spec.ts tests/RecapSpec.js tests/mock-utils.js tests/mock-ajax.js tests/Blob.js --dist-dir build/tests && npm test

test:
	npm run build:test && npm test