PROJ=quicksort

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-s WASM=1 -O3 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS='["_getOffset", "_$(PROJ)"]' 

$(PROJ).js: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).js $(PROJ).wasm 