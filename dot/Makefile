PROJ=dot

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-s WASM=1 --emrun -O3 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS='["_getFirstOffset", "_getSecondOffset", "_dot_product"]' 

$(PROJ).js: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).js $(PROJ).wasm 