PROJ=hello

ifeq ($(OS), Windows_NT)
	RM=del
else
	RM=RM
endif

CC=emcc

CFLAG=-O3 --emrun -s WASM=1

$(PROJ).html: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).html $(PROJ).js $(PROJ).wasm