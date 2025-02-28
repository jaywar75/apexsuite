CC      = gcc
CFLAGS  = -Wall -Wextra -I./libencrypt   # <-- Tells the compiler to look in ./libencrypt for headers
LDFLAGS =

# Example object files
OBJ = encrypt.o encrypt2.o

all: myapp

myapp: $(OBJ)
	$(CC) $(CFLAGS) -o myapp $(OBJ) $(LDFLAGS)

encrypt.o: libencrypt/encrypt.c libencrypt/encrypt.h
	$(CC) $(CFLAGS) -c libencrypt/encrypt.c -o encrypt.o

encrypt2.o: src/encrypt2.c libencrypt/encrypt.h
	$(CC) $(CFLAGS) -c src/encrypt2.c -o encrypt2.o

clean:
	rm -f *.o myapp