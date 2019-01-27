PROJ=matrix_ops

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=--emrun -g -s WASM=1 -O3 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS='["_getOffset", "_scalarMult", "_vectorMult", "_matrixMult"]' 

$(PROJ).js: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).js $(PROJ).wasm 